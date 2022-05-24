import Button from '@mui/material/Button';
import schemaRegister from "../../schemas/schemaRegister";
import useUser from '../../../hooks/useUser';

export default function DisableElevation({ form }) {
    const { setOpenError } = useUser();
    const handleSubmit = async () => {
        setOpenError(true);
        await schemaRegister.validate(form);
    };

    return (
        <Button
            sx={{
                width: `44.9rem`,
                height: `5.3rem`,
                margin: `38px 0 8px 0`,
                background: `#7978d9`,
                ":hover": { background: `rgba(121, 120, 217, 0.8)` }
            }}
            variant="contained"
            onClick={handleSubmit}
            type="submit"
        >
            Cadastrar
        </Button>
    );
}