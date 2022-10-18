import React from 'react'
import userRegister from '../hooks/useRegister'
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Register() {
    const [errorFind, message, state, setState, registerFunc] = userRegister()
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
            <Typography variant="h3" sx={{ marginBottom: "30px" }}  >Регистрация</Typography>

            <TextField

                id="outlined-error-helper-text"
                label="Email"
                required
                error={errorFind(message.message, "email")}
                helperText={errorFind(message.message, "email")}
                onChange={(e) => setState({ ...state, email: e.target.value })}
            />
            <TextField

                id=""
                required
                label="Login"
                error={errorFind(message.message, "login")}
                helperText={errorFind(message.message, "login")}
                onChange={(e) => setState({ ...state, login: e.target.value })}
            />

            <TextField

                required
                id="outlined-error-helper-text"
                label="Pasword"
                defaultValue=""
                type="password"
                error={errorFind(message.message, "password")}
                helperText={errorFind(message.message, "password")}
                onChange={(e) => setState({ ...state, password: e.target.value })}
            />
            <TextField

                required
                id="outlined-error-helper-text"
                label="Pasword"
                defaultValue=""
                type="password"
                error={errorFind(message.message, "password")}
                helperText={errorFind(message.message, "password")}
                onChange={(e) => setState({ ...state, repassword: e.target.value })}
            />

            <Button
                onClick={(e) => registerFunc()}
                variant="contained"
                sx={{ width: "100%" }}
            >Зарегистрироваться</Button>

        </Box >

    )
}
