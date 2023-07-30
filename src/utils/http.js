import axios from 'axios'
const httpInstance= axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config=>{
    //从pinia 中获取token数据
    
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