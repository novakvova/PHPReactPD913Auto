import axios from "axios";

export default axios.create({
    baseURL: "http://local.laravel.pd913.com:100/",
    headers: {
        "Content-type": "application/json"
    }
});