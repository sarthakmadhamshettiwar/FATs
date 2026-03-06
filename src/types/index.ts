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

export type ProductsSelectionMap = Record<number, number>;

export interface ProductProps {
  productInfo: Product;
  ProductsSelectionMap: ProductsSelectionMap;
  setProductsSelectionMap: Dispatch<SetStateAction<ProductsSelectionMap>>;
}

export interface FatProductProps {
  fatProductInfo: FatProduct;
  ProductsSelectionMap: ProductsSelectionMap;
  setProductsSelectionMap: Dispatch<SetStateAction<ProductsSelectionMap>>;
}

export interface CarouselProps {
  fats: FatProduct[];
  ProductsSelectionMap: ProductsSelectionMap;
  setProductsSelectionMap: Dispatch<SetStateAction<ProductsSelectionMap>>;
}
