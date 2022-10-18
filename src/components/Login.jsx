import React from 'react';
import useLogin from '../hooks/useLogin';

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Login = () => {

    const [validate, setState, state, login] = useLogin()
    return (
        <Box
            component="form"
            sx={{


                width: "100%",
                display: "flex",
                flexDirection: "column",

                gap: "10px",

            }}
            noValidate={false}
            autoComplete="off"
        >
            <Typography variant="h3" sx={{ marginBottom: "30px" }}  >Логин</Typography>

            <TextField

                id="outlined-error-helper-text"
                label="Login"
                required
                error={state.errors}

                onChange={(e) => setState({ ...state, login: e.target.value })}
            />
            <TextField

                id=""
                required
                label="Password"
                type="password"
                error={state.errors}
                helperText={"Не правильный логин или пароль"}
                onChange={(e) => setState({ ...state, password: e.target.value })}
            />


            <Button
                onClick={(e) => login()}
                variant="contained"
                sx={{ width: "100%" }}
            >Авторизоваться</Button>

        </Box >


    );
}

export default Login;
