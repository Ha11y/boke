<script setup>

</script>
<template>
    <div class="container"> 

       <div class="logo"><img src="../../../assets/image/logo.jpeg" alt=""></div>
       <div class="text">欢迎来到我的博客</div>
       <div class="article"><li>所有文章</li></div>
       <div class="tag">
         <li> 分类一</li>
         <li>分类二</li>
         <li>分类三</li>
         <li>分类四</li>
       </div>
    </div>
</template>


<style scoped>
.container{
    display: flex;
    width: 100%;
    /* background-color: #bee9de; */
    height: 70px;
}
.flex-grow{
    flex-grow: 2;
}
.logo{
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 400px;
}
.logo img{
  width: 70px;
  height: 70px;
}
.text{
    width: auto;
    height: 70px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 20px;
}
.article{
    width: auto;
    height: 70px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 20px;
}
.article:hover{
    background-color: #aaa3a3;
    
}
.article li{
    list-style: none;
}

.tag{
    width: auto;
    height: 70px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 20px;
}
.tag li{
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-left: 20px;
}
.tag li:hover{
    background-color: #aaa3a3;
}
</style>