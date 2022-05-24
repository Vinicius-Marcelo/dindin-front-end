import { useState } from 'react';

export default function useUserProviler() {
    const [loginForm, setLoginForm] = useState({ email: ``, password: `` });
    const [openError, setOpenError] = useState(false);

    return {
        loginForm,
        setLoginForm,
        openError,
        setOpenError
    };
}