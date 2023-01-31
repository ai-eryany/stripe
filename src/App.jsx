import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './styles/css/index.css';

function App() {
    const routers = createBrowserRouter(AppRoutes);
    return (
        <React.StrictMode>
            <RouterProvider router={routers} />
        </React.StrictMode>
    );
}

export default App;
