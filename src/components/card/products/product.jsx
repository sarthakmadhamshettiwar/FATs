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

        // get the frequently added products for the current product: currently this is called everytime the prodduct is added
        // TODO: optimise it to only call if count is changing from  0->1 or use localStorage to cache the FATs if 
        // the product was added in customer journey already 
        if(!localStorage.getItem(`frequentlyAddedProductsForId_${id}`)){
            const frequentlyAddedProductsForId = await getFrequentlyAddedTogetherForProduct(id);
            localStorage.setItem(`frequentlyAddedProductsForId_${id}`, JSON.stringify(frequentlyAddedProductsForId));
            setFats(frequentlyAddedProductsForId);
        }
        else{
            setFats(JSON.parse(localStorage.getItem(`frequentlyAddedProductsForId_${id}`)));
        }
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