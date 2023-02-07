import { create } from 'zustand';
import INIT_DEVELOPERS from './INIT_DEVELOPERS';

const useDevelopers = create((set) => ({
    developers: INIT_DEVELOPERS,
}));

export default useDevelopers;
