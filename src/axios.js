import axios from 'axios';

const instance = axios.create({
    baseURL: "https://funvid4.herokuapp.com/",
});

export default instance