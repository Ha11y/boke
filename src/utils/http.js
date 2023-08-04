import axios from 'axios'
const httpInstance= axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config=>{
    //从pinia 中获取token数据
    config.headers.Authorization="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTA1MjY3MCwiZXhwIjoxNjkxMTM5MDcwfQ.fJeccGD234Uq5mt3mISbwsXNzM2BbVWHYNiXPTdBNz0"
    return config
},e=>Promise.reject(e))



//axios 响应式拦截器
httpInstance.interceptors.response.use(res=>res.data,e=>{
    // ElMessage({type:'warning',message:e.response.data.message})
    //401token失效处理
    //1 .清除本地用户数据
    //2 跳转到登录页
    return Promise.reject(e)
})
export default httpInstance