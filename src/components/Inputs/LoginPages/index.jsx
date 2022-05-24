import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';
import useUser from '../../../hooks/useUser';

export default function InputAdornments() {
    const { loginForm, setLoginForm } = useUser();
    const [values, setValues] = useState({
        amount: ``,
        password: ``,
        weight: ``,
        showPassword: false
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChangerForm = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
    };

    return (
        <Box sx={{
            display: `flex`, flexDirection: `column`, alignItems: `center`, flexWrap: `wrap`, gap: `31px`
        }}
        >
            <TextField
                sx={{
                    width: `449px`,
                    height: `63px`,
                    fontSize: `18px`,
                    lineHeight: `21px`
                }}
                id="outlined-required"
                label="E-mail"
                value={loginForm.email}
                name="email"
                onChange={handleChangerForm}
            />
            <div>
                <FormControl
                    sx={{
                        width: `449px`,
                        height: `63px`,
                        fontSize: `18px`,
                        lineHeight: `21px`
                    }}
                    variant="outlined"
                >
                    <InputLabel htmlFor="outlined-adornment-login-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? `text` : `password`}
                        value={loginForm.password}
                        name="password"
                        onChange={handleChangerForm}
                        endAdornment={(
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )}
                        label="Password"
                    />
                </FormControl>
            </div>
        </Box>
    );
}
