import Button from '@mui/material/Button';
import useUser from '../../../hooks/useUser';

export default function DisableElevation() {
    const { loginForm } = useUser();

    const handleSubmit = () => { }

    return (
        <Button
            sx={{
                width: '44.9rem',
                height: '5.2rem',
                marginTop: '73px',
                background: '#7978d9',
                ":hover": { background: 'rgba(121, 120, 217, 0.8)' }
            }}
            variant="contained"
            disableElevation
            onClick={handleSubmit}>
            Entrar
        </Button>
    );
}