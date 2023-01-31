import Home from './pages/Home';
import Login from './pages/Login';
import Test from './pages/Test';

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/test',
        element: <Test />,
    },
];

export default AppRoutes;
