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

export default function InputAdornments({ form, setForm }) {
    const [values, setValues] = useState({
        amount: ``,
        weight: ``,
        weightRange: ``,
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
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <Box sx={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            flexWrap: `wrap`,
            gap: `1.5rem`
        }}
        >
            <TextField
                sx={{
                    width: `44.9rem`,
                    height: `6.3rem`,
                    fontSize: `18px`,
                    lineHeight: `21px`,
                    "@media(max-width: 560px)": { width: `26.0rem` },
                    "@media(max-width: 340px)": { width: `24.0rem` }
                }}
                id="outlined-required-name"
                label="Name"
                value={form.nome}
                name="nome"
                onChange={handleChangerForm}
            />
            <TextField
                sx={{
                    width: `44.9rem`,
                    height: `6.3rem`,
                    fontSize: `18px`,
                    lineHeight: `21px`,
                    "@media(max-width: 560px)": { width: `26.0rem` },
                    "@media(max-width: 340px)": { width: `24.0rem` }
                }}
                id="outlined-required-email"
                label="E-mail"
                value={form.email}
                name="email"
                type="email"
                onChange={handleChangerForm}
            />
            <div>
                <FormControl
                    sx={{
                        width: `44.9rem`,
                        height: `6.3rem`,
                        fontSize: `18px`,
                        lineHeight: `21px`,
                        "@media(max-width: 560px)": { width: `26.0rem` },
                        "@media(max-width: 340px)": { width: `24.0rem` }
                    }}
                    variant="outlined"
                >
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? `text` : `password`}
                        value={form.senha}
                        name="senha"
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
            <div>
                <FormControl
                    sx={{
                        width: `44.9rem`,
                        height: `63.rem`,
                        fontSize: `18px`,
                        lineHeight: `21px`,
                        "@media(max-width: 560px)": { width: `26.0rem` },
                        "@media(max-width: 340px)": { width: `24.0rem` }
                    }}
                    variant="outlined"
                >
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-confirm-password"
                        type={values.showPassword ? `text` : `password`}
                        value={form.confirmeSenha}
                        name="confirmeSenha"
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
                        label="Confirm Password"
                    />
                </FormControl>
            </div>
        </Box>
    );
}
