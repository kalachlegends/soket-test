import { AuthContext } from "../context/AuthContext"
import { useContext } from "react";
const useLogout = () => {
    const context = useContext(AuthContext);
    const useFunc = () => {
        context.setAuth("")
        context.setToken("")
    }
    return [useFunc]
}
export default useLogout