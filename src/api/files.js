import request from '../utils/http.js'
//上传文件
export const  uploadFileApi =()=>{
  return request({
    method:'post',
    url:'/upload/file'
  })
}