import { useEffect, useState, useContext } from "react";
import axios from '../axios'

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const useLogin = () => {
    const navigate = useNavigate()
    const context = useContext(AuthContext);
    const [state, setstate] = useState({
        login: "",
        passsword: "",
    });
    const [errors, seterrors] = useState("");
    const login = () => {
        console.log(state)
        axios.post("/api/auth/login", state).then(({ data }) => {
            seterrors("")
            context.setAuth("true")
            context.setToken(data.token)
            navigate("/")

        }).catch(({ response }) => {
            seterrors("Не правильный логин или пароль")
        })
    }
    return [errors, setstate, state, login]
}

export default useLogin