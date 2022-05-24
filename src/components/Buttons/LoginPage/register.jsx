import Button from '@mui/material/Button';

export default function DisableElevation() {
    return (
        <Button
            sx={{
                width: '28.4rem',
                height: '5.2rem',
                marginTop: '73px',
                background: '#7978d9',
                ":hover": { background: 'rgba(121, 120, 217, 0.9)' }
            }}
            variant="contained"
            disableElevation>
            Cadastre-se
        </Button>
    );
}