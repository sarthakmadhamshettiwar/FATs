import './style.css';
import type { Dispatch, SetStateAction } from 'react';
import type { FatProductProps } from '../../../types';

function FatProduct({ fatProductInfo, productsQuantityMap, setProductsQuantityMap }: FatProductProps) {
    const { id, name, image, price } = fatProductInfo;
    const count = productsQuantityMap[id] ?? 0;
    
    async function handleFatUpdate(id: number, updateType: "add" | "remove", count: number, setProductsQuantityMap: Dispatch<SetStateAction<Record<number, number>>>) {
        /* 
        TODO: 
        We need to find the main product with this id and update its count as well => 
        This is to ensure that the FATs are updated for the main product
        */
        if (updateType === "add") {
            const newCount = Math.min(5, count + 1);
            setProductsQuantityMap(prev => ({ ...prev, [id]: newCount }));
        } else {
            const newCount = Math.max(0, count - 1);
            setProductsQuantityMap(prev => ({ ...prev, [id]: newCount }));
        }
    }

    return (
        <div className="fat-card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>${price}</p>
            <div className="fat-stepper">
                <button onClick={() => handleFatUpdate(id, "remove", count, setProductsQuantityMap)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleFatUpdate(id, "add", count, setProductsQuantityMap)}>+</button>
            </div>
        </div>
    );
}

export default FatProduct;
