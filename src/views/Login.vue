<template>
    <div class="container">
        <div id="loginDiv">
        <form action="" id="form">
            <h1 style="text-align: center;color: aliceblue;">立即登录</h1>
            <p>用户名:<input v-model="Username" type="text"></p>
            
            <p>密码: <input v-model="Password" type="password" placeholder="密码长度至少为6位"></p>
            <p style="text-align: center;color: darkgray;"><a href="#">忘记密码?</a></p>
            <div style="text-align: center;margin-top: 30px;">
                <input type="button" class="button" value="登录" @click="login_click">
                <input type="button" class="button" value="注册" @click="register_click">
            </div>
        </form>
    </div>
    </div>
      
    
     
   

</template>

<script setup>
import {getUserApi} from '../api/user.js'
import {ref,onMounted} from 'vue'
import {ElMessage} from 'element-plus'
import { useRouter } from 'vue-router';
const router =useRouter() 
const  user= ref({})
const Username=ref("")
const Password=ref("")
 const getUser =async ()=>{
       const res=await getUserApi(Username.value,Password.value)
       user.value=res.data
       console.log(res)
 }
 const login_click= async ()=>{
      await getUser()
    const tag=user.value.token
    if(tag){
     ElMessage({type:"success",message:"登录成功"})
    router.replace('/')
    }
    else{
        ElMessage({type:"warning",message:"登录失败"})
    }
 }
 
</script>

<style  scoped>
* {
            margin: 0;
            padding: 0;
            
        }
        .container{
  position: relative;
            width: 1920px;
            height: 931px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: url(../assets/image/background.jpg) no-repeat center center fixed;
            background-size: cover;
        }
        
        #loginDiv {
            width: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 400px;
            background-color: rgba(18, 18, 19, 0.3);
            box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
            border-radius: 250px;
            
        }
         
        
        p {
            margin-top: 30px;
            margin-left: 20px;
            color: azure;
        }
         
        input {
            margin-left: 15px;
            border-radius: 5px;
            border-style: hidden;
            height: 30px;
            width: 140px;
            background-color: rgba(216, 191, 216, 0.5);
            outline: none;
            color: #f0edf3;
            padding-left: 10px;
        }
         
        .button {
            border-color: cornsilk;
            background-color: rgba(100, 149, 237, .7);
            color: aliceblue;
            border-style: hidden;
            border-radius: 5px;
            width: 100px;
            height: 31px;
            font-size: 16px;
        }
        input::-ms-input-placeholder{text-align: center;}
        input::-webkit-input-placeholder{text-align: center;}
   
 
        
</style>