import request from '../utils/http'
//创建博客文章
export const createBlogApi= ()=>{
     return  request({
        method:'post',
        url:'/blogs/create',

     })
}
//查询博客列表
export const getBlogsListApi=()=>{
   return request({
    url:"/blogs/query",
    method:'GET',
   })
}
//获取博客详情
export const getBlogDetail=()=>{
    return request({
    method:'get',
    url:'/query/:id'
    })
}
//根据博客id修改博客
export const updateBlogAPi=(id)=>{
    return request({
  method:'patch',
  url:'/update/:id'
    })
}
//删除博客
export const deleteBlog =(id)=>{
   return request({
      method:'delete',
      url:'/delete/:id'
   })
}
//查找博客
export const queryBlogApi=()=>{
    return request({
        method:'get',
        url:'/blogs/queryByTag/:tagId'
    })
}