import { toast } from 'react-toastify';
import yup from './configure';
import error from '../messages/error';

const schemaRegister = yup.object().shape({
    nome: yup.string()
        .required(() => toast.error(error.nameDontExists)),
    email: yup.string()
        .email(() => toast.error(error.invalidFormatEmail))
        .required(() => toast.error(error.emailDontExists)),
    senha: yup.string()
        .required(() => toast.error(error.passwordDontExists))
        .min(6, () => toast.error(error.passwordFewCharacters)),
    confirmeSenha: yup.string()
        .required(() => toast.error(error.confirmPasswordDontExists))
        .oneOf([yup.ref(`senha`), null], `${() => toast.error(error.passwordsAreNotTheSame)}`)
});

export default schemaRegister;