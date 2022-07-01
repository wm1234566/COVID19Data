import axios from "axios"

export  let   result= async ()=>{
    return axios.get("http://localhost:3001/api/list").then(res=>res.data)
}