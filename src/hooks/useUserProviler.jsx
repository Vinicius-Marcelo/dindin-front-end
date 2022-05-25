import { useState } from 'react';

export default function useUserProviler() {
    const [loginForm, setLoginForm] = useState({ email: ``, password: `` });

    return {
        loginForm,
        setLoginForm
    };
}