// Product Component => will be rendered during load directly inside App.jsx
// On each stepper click => render the FATs for the product
// If the count of product becomes 0 => hide the FATs for that particular product


import './style.css';
import { useState } from 'react';
import getFrequentlyAddedTogetherForProduct from '../../../data/frequentlyAddedTogether'
import Carousel from '../../carousel/carousel'

async function handleProductUpdate(id, updateType, count, setCount, setFats){
    if(updateType === "add"){
        const newCount = Math.min(5, count + 1);
        setCount(newCount);

        // get the frequently added products for the current product
        const frequentlyAddedProductsForId = await getFrequentlyAddedTogetherForProduct(id);
        setFats(frequentlyAddedProductsForId);
    }else{
        const newCount = Math.max(0, count - 1);
        setCount(newCount);

        if(newCount === 0){
            setFats([]);
        }
    }
}
function Product(productInfo) {
    const {id, name, description, price, image} = productInfo;
    const [count, setCount] = useState(0);
    const [fats, setFats] = useState([]);
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <div className="stepper">
                <button onClick={() => handleProductUpdate(id, "remove", count, setCount, setFats)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleProductUpdate(id, "add", count, setCount, setFats)}>+</button>
            </div>
            {fats && fats.length > 0 && (
                <div className="fats-container">
                    <h4 className="fats-title">Frequently Added Together</h4>
                    <Carousel fats={fats} />
                </div>
            )}
        </div>
    )
}

export default Product;