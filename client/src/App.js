import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutAdmin from './components/admin/Layout';
import LayoutAuth from './components/auth/Layout';
import LayoutUser from './components/user/Layout';
import Dashboard from './pages/admin/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import CarDetail from './pages/user/CarDetail';
import Cars from './pages/user/Cars';
import OrderDetail from './pages/user/OrderDetail';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth Routes */}
                <Route element={<LayoutAuth />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                {/* Admin Routes */}
                <Route element={<LayoutAdmin />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
                {/* User Routes */}
                <Route path="/" element={<LayoutUser />}>
                    <Route path="cars" element={<Cars />} />
                    <Route path="cars/:id" element={<CarDetail />} />
                    <Route path="order/:id" element={<OrderDetail />} />
                </Route>
                {/* Error Route */}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
