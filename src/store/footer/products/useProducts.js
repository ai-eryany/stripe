import { create } from 'zustand';
import INIT_PRODUCTS from './INIT_PRODUCTS';

const useProducts = create((set) => ({
    products: INIT_PRODUCTS,
}));

export default useProducts;
