import { create } from 'zustand';
import INIT_RESOURCES from './INIT_RESOURCES';

const useResources = create((set) => ({
    resources: INIT_RESOURCES,
}));

export default useResources;
