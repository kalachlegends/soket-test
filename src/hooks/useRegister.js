import { useEffect, useState } from "react";
import axios from '../axios'
import useErrorForm from "./useErrorForm";

const useRegister = () => {
    const [state, setState] = useState({
        login: "",
        password: "",
        email: ""
    });
    const [message, setmessage] = useState({
        isRegister: false,
        message: []
    });


    const registerFunc = async () => {
        await axios.post('/api/auth/register', state)
            .then(function (response) {
                console.log(response)
                setmessage({
                    ...message,
                    isRegister: true,
                    message: []
                })
            })
            .catch(function (error) {
                console.log(error)
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