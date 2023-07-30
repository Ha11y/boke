import request from "../utils/http";
export const getUserApi=(username,password)=>{
    return request({
        url:'/auth/login',
        method:'POST',
        data:{
            username,
            password
        }
    })
}
