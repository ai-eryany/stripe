import { create } from 'zustand';
import INIT_SOLUTIONS from './INIT_SOLUTIONS';

const useSolutions = create((set) => ({
    solutions: INIT_SOLUTIONS,
}));

export default useSolutions;
