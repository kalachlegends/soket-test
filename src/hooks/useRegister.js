import { useEffect, useState, useContext } from "react";
import axios from '../axios'
import useErrorForm from "./useErrorForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const useRegister = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        login: "",
        password: "",
        email: "",
        repassword: ""
    });
    const [message, setmessage] = useState({
        isRegister: false,
        message: []
    });

    const context = useContext(AuthContext);
    const registerFunc = async () => {
        await axios.post('/api/auth/register', state)
            .then(function (response) {
                context.setAuth("true")
                context.setToken(response.data.token)
                setmessage({
                    ...message,
                    isRegister: true,
                    message: []
                })
                navigate("/")
            })
            .catch(function (error) {
                console.log(error)
                console.log(error.response.data.message)
                setmessage({
                    ...message,
                    isRegister: false,
                    message: error.response.data.message

                })
            });
    }

    return [useErrorForm, message, state, setState, registerFunc]
}

export default useRegister