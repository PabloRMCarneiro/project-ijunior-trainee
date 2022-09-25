import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoutes = () => localStorage.getItem('stateLog') === 'true' ? <Outlet /> : <Navigate to="/" />;

export default PrivateRoutes;