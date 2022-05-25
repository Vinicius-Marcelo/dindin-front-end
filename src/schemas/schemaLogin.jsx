import { toast } from 'react-toastify';
import yup from './configure';
import error from '../messages/error';

const schemaLogin = yup.object().shape({
    email: yup.string()
        .email(() => toast.error(error.loginWrong))
        .required(() => toast.error(error.loginWrong)),
    senha: yup.string()
        .required(() => toast.error(error.loginWrong))
});

export default schemaLogin;