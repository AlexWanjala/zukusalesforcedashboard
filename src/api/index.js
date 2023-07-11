import axios from "axios";


export const url = "https://salesapp.zuku.co.ke/";

let tokenStr = 'MTVlNmJkNDE1NWZiNDBiZTZlZTVmNjMwZDg5ZmNkMTU1NTRiOTM2MDBlY2U2ZmI2YjUwNGE4MWRmOWJjYTFkZA==';
export const execute = (params) => {
    return axios.post(url,params,{headers: {"Authorization": `Bearer ${tokenStr}`}})
}

export const executeDownload = (params) => {
    return axios.post(url,params,{headers: {"Authorization": `Bearer ${tokenStr}`}, responseType: 'blob'})
}