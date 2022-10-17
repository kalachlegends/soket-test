import { AuthContext } from "../context/AuthContext"
import { useContext } from "react";
const useLogout = () => {
    const useFunc = () => {
        const context = useContext(AuthContext);
        context.setAuth(null)
        context.setToken(null)
        localStorage.setItem("isAuth", "")
        localStorage.setItem("token", "")
    }
    return [useFunc]
}
export default useLogout