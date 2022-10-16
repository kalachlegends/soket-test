export const useErrorForm = (array, key) => {
    let errorMess = array.find((e) => e[key])
    if (errorMess)
        return errorMess[key]
    else
        return ''
}


export default useErrorForm