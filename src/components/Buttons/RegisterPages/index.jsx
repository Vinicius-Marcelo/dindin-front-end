import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import schemaRegister from "../../../schemas/schemaRegister";
import api from '../../../services/api';
import success from '../../../messages/success';

export default function ButtonRegister({ form }) {
    const navigate = useNavigate();
    const handleSubmit = async () => {
        await schemaRegister.validate(form);
        toast.success(success.userCreated);
        navigate(`/`);
        try {
            await api.post(`/usuario`, { ...form });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Button
            sx={{
                width: `44.9rem`,
                height: `5.3rem`,
                margin: `38px 0 8px 0`,
                background: `#7978d9`,
                ":hover": { background: `rgba(121, 120, 217, 0.8)` },
                "@media(max-width: 560px)": {
                    width: `26.0rem`
                },
                "@media(max-width: 340px)": {
                    width: `24.0rem`
                }
            }}
            variant="contained"
            onClick={handleSubmit}
            type="submit"
        >
            Cadastrar
        </Button>
    );
}