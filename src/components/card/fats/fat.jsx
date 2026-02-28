import './style.css';
import { useState } from 'react';
// FAT component => will be rendered inside the carousel when a product is added to the cart

function FatProduct(fatProductInfo){
    const {name, image, price} = fatProductInfo;
    const [count, setCount] = useState(0);
    return (
    <div className="fat-card">
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p>${price}</p>
        <div className="fat-stepper">
                <button onClick={() => handleFatUpdate("remove", count, setCount)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleFatUpdate("add", count, setCount)}>+</button>
        </div>
    </div>
    )
}

async function handleFatUpdate(updateType, count, setCount){
    if(updateType === "add"){
        const newCount = Math.min(5, count + 1);
        setCount(newCount);
    }else{
        const newCount = Math.max(0, count - 1);
        setCount(newCount);
    }
}
export default FatProduct;