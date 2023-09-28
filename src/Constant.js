import axios from "axios";
import jsCookie from "js-cookie";



export const API_CLIENT = axios.create({
    baseURL:"https://react.dealbix.com",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${jsCookie.get("token")}`
    },
})

export const imageUrl = 'https://dealbix.com/uploads/motors/'