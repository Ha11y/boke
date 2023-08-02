import request  from  '../utils/http'
//创建标签
export const createTagApi =()=>{
    return request({
        method:'post',
        url:'/tags/create'
    })
}
//查询标签
export const queryTagsApi=()=>{
    return request({
        method:'get',
        url:"/tags/query"
    })
}