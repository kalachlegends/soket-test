import { useEffect, useState, useContext } from "react";
import axios from '../axios'
import useErrorForm from "./useErrorForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const useLogin = () => {
    const navigate = useNavigate()
    const context = useContext(AuthContext);
    const [state, setstate] = useState({
        login: "",
        passsword: "",
        errors: ""
    });
    const logout = () => {
        axios.post("/api/auth/login", state).then(({ data }) => {
            context.setAuth("true")
            context.setToken(data.token)
            navigate("/")

        }).catch(({ response }) => {
            setstate({ ...state, errors: response.data.message })
        })
    }
    return [useErrorForm, setstate, state, logout]
}

export default useLogin