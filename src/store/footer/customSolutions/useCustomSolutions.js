import { create } from 'zustand';
import INIT_CUSTOM_SOLUTIONS from './INIT_CUSTOM_SOLUTIONS';

const useCustomSolutions = create((set) => ({
    customSolutions: INIT_CUSTOM_SOLUTIONS,
}));

export default useCustomSolutions;
