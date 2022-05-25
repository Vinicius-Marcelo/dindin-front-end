import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import schemaLogin from '../../../schemas/schemaLogin';
import message from '../../../messages/error';

export default function ButtonLogin({ form }) {
    const handleSubmit = async () => {
        try {
            await schemaLogin.validate(form);
            const response = await api.post(`/login`, { ...form });
            const { token } = response.data;
            if (!token) return toast.error(message.loginWrong);
        } catch (error) {
            console.log(error.massage);
        }
    };

    return (
        <Button
            sx={{
                width: `44.9rem`,
                height: `5.2rem`,
                marginTop: `73px`,
                background: `#7978d9`,
                ":hover": { background: `rgba(121, 120, 217, 0.8)` }
            }}
            variant="contained"
            disableElevation
            onClick={handleSubmit}
        >
            Entrar
        </Button>
    );
}