import './style.css';
import type { Dispatch, SetStateAction } from 'react';
import type { FatProductProps } from '../../../types';

function FatProduct({ fatProductInfo, ProductsSelectionMap, setProductsSelectionMap }: FatProductProps) {
    const { id, name, image, price } = fatProductInfo;
    const count = ProductsSelectionMap[id] ?? 0;
    
    async function handleFatUpdate(id: number, updateType: "add" | "remove", count: number, setProductsSelectionMap: Dispatch<SetStateAction<Record<number, number>>>) {
        if (updateType === "add") {
            const newCount = Math.min(5, count + 1);
            setProductsSelectionMap(prev => ({ ...prev, [id]: newCount }));
        } else {
            const newCount = Math.max(0, count - 1);
            setProductsSelectionMap(prev => ({ ...prev, [id]: newCount }));
        }
    }

    return (
        <div className="fat-card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>${price}</p>
            <div className="fat-stepper">
                <button onClick={() => handleFatUpdate(id, "remove", count, setProductsSelectionMap)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleFatUpdate(id, "add", count, setProductsSelectionMap)}>+</button>
            </div>
        </div>
    );
}

export default FatProduct;
