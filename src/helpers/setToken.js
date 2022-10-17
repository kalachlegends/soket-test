

const setToken = (token) => {
    localStorage.setItem("isAuth", "true")
    localStorage.setItem("token", token)

}

export default setToken