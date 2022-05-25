import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Main from './pages/Home/Main';
import Login from './pages/Login';
import Register from './pages/Register';

export default function ProjectRoutes() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Home" element={<Main />} />
            </Routes>
        </UserProvider>
    );
}
