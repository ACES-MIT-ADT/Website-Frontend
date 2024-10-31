import axios from "axios";

const uri = "192.168.1.2";
const BASE_URL = `http://${uri}:5000`;


var Endpoint = {
    Service : "/services",
    Leadership : "/leadership",
    Timeline: "/timeline",
    Gallery: "/gallery",
    Banner: "/banners",
    BannerNL : "/bannernl",
    Contact: "/contact"
};


const API_REQ = axios.create({
    baseURL: BASE_URL
});


const FetchRes = (collection: string) => API_REQ.get(`${Endpoint.Service}/${collection}`);

const ContactPost = (data: object) => API_REQ.post(`/service${Endpoint.Contact}`,data);

// console.log(FetchRes)

export {FetchRes, ContactPost}