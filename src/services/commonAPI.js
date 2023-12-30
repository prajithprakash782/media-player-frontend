import axios from "axios"





export const commonAPI = async (httpmethods, url, reqBody) => {
    let reqConfig = {
        method: httpmethods,
        url ,
        data: reqBody,
        Headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}