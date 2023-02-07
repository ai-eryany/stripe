import { create } from 'zustand';
import INIT_COMPANY from './INIT_COMPANY';

const useCompany = create((set) => ({
    company: INIT_COMPANY,
}));

export default useCompany;
