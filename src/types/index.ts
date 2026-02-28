// Type definitions for the application
import type { Dispatch, SetStateAction } from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface FatProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export type ProductsQuantityMap = Record<number, number>;

export interface ProductProps {
  productInfo: Product;
  productsQuantityMap: ProductsQuantityMap;
  setProductsQuantityMap: Dispatch<SetStateAction<ProductsQuantityMap>>;
}

export interface FatProductProps {
  fatProductInfo: FatProduct;
  productsQuantityMap: ProductsQuantityMap;
  setProductsQuantityMap: Dispatch<SetStateAction<ProductsQuantityMap>>;
}

export interface CarouselProps {
  fats: FatProduct[];
  productsQuantityMap: ProductsQuantityMap;
  setProductsQuantityMap: Dispatch<SetStateAction<ProductsQuantityMap>>;
}
