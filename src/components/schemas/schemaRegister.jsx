import { toast } from 'react-toastify';
import yup from './configure';
import error from '../../messages/error';

const schemaRegister = yup.object().shape({
    name: yup.string().required(() => toast.error(error.nameDontExists)),
    email: yup.string().email().required(() => toast.error(error.emailDontExists)),
    password: yup.string().required(() => toast.error(error.passwordDontExists)).min(6),
    confirmPassword: yup.string()
        .required(() => toast.error(error.confirmPasswordDontExists))
        .oneOf([yup.ref(`password`), null], `${() => toast.error(error.passwordsAreNotTheSame)}`)
});

export default schemaRegister;