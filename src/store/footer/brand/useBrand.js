import { create } from 'zustand';
import INIT_BRAND from './INIT_BRAND';

const useBrand = create((set) => ({
    brand: INIT_BRAND,
}));

export default useBrand;
