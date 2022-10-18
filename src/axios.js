import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    baseURL: 'http://192.168.0.126:10606/'
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = localStorage.getItem("token") || "";


export default instance;