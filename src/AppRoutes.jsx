import Home from './pages/Home';
import Test from './pages/Test';

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/test',
        element: <Test />,
    },
];

export default AppRoutes;
