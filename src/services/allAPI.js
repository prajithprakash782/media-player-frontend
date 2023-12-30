import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//api to upload videos



export const uploadALllVideo = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

export const getALllVideo = async ()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

export const deleteVideo = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

export const addWatchHistory = async (videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

export const getWatchHistory = async ()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

export const deleteHistory = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}


export const addCategory = async (body)=>{
    return await commonAPI('POST',`${serverURL}/category`,body)
}

export const getCategory = async ()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}
export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})}
    
export const getAVideo = async (id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api call to update the category
export const updateCategory = async (id,body)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}
