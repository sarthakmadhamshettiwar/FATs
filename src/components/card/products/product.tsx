// Product Component => will be rendered during load directly inside App.tsx
// On each stepper click => render the FATs for the product
// If the count of product becomes 0 => hide the FATs for that particular product

import './style.css';
import { useState } from 'react';
import getFrequentlyAddedTogetherForProduct from '../../../data/frequentlyAddedTogether';
import Carousel from '../../carousel/carousel';
import type { ProductProps, FatProduct } from '../../../types';

import type { Dispatch, SetStateAction } from 'react';

async function handleProductUpdate(
    id: number,
    updateType: "add" | "remove",
    count: number,
    setProductsQuantityMap: Dispatch<SetStateAction<Record<number, number>>>,
    setFats: Dispatch<SetStateAction<FatProduct[]>>
) {
    if (updateType === "add") {
        const newCount = Math.min(5, count + 1);
        setProductsQuantityMap(prev => ({ ...prev, [id]: newCount }));

        // get the frequently added products for the current product: currently this is called everytime the prodduct is added
        // TODO: optimise it to only call if count is changing from  0->1 or use localStorage to cache the FATs if 
        // the product was added in customer journey already 
        if (!localStorage.getItem(`frequentlyAddedProductsForId_${id}`)) {
            const frequentlyAddedProductsForId = await getFrequentlyAddedTogetherForProduct(id);
            if (frequentlyAddedProductsForId) {
                localStorage.setItem(`frequentlyAddedProductsForId_${id}`, JSON.stringify(frequentlyAddedProductsForId));
                setFats(frequentlyAddedProductsForId);
            }
        } else {
            const cachedFats = localStorage.getItem(`frequentlyAddedProductsForId_${id}`);
            if (cachedFats) {
                setFats(JSON.parse(cachedFats));
            }
        }
    } else {
        const newCount = Math.max(0, count - 1);
        setProductsQuantityMap(prev => ({ ...prev, [id]: newCount }));

        if (newCount === 0) {
            setFats([]);
        }
    }
}

function Product({ productInfo, productsQuantityMap, setProductsQuantityMap }: ProductProps) {
    const { id, name, description, price, image } = productInfo;
    const count = productsQuantityMap[id] ?? 0;
    const [fats, setFats] = useState<FatProduct[]>([]);

    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <div className="stepper">
                <button onClick={() => handleProductUpdate(id, "remove", count, setProductsQuantityMap, setFats)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleProductUpdate(id, "add", count, setProductsQuantityMap, setFats)}>+</button>
            </div>
            {fats && fats.length > 0 && (
                <div className="fats-container">
                    <h4 className="fats-title">Frequently Added Together</h4>
                    <Carousel 
                        fats={fats} 
                        productsQuantityMap={productsQuantityMap} 
                        setProductsQuantityMap={setProductsQuantityMap} 
                    />
                </div>
            )}
        </div>
    );
}

export default Product;
