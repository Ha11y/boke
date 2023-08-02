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
//注册用户
export const createUserApi=()=>{
      return request({
        method:"post",
        url:'/auth/register'
      })
}
