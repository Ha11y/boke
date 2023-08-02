<template>
    <div class="container">
        <div class="articleList">
            <div class="tagRouter">
                <span>当前位置: </span>
                <span><a href="">首页></a></span>
                <span><a href="">导航一 ></a></span>
                <span><a href="">导航二 ></a></span>
                <span><a href="">导航三 ></a></span>
            </div>
            <div class="tagsContainer">
                 <span class="">标签一</span>
                 <span class="">标签一</span>
                 <span class="">标签一</span>
                 <span class="">标签一</span>
            </div>
               <h2>所有文章</h2>
               <div class="line"></div>
                <div class="articles">
                    
                    <article v-for="item in blogs.rows" :key="item.id">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <p class="author">作者:{{ item.user?.nickname }},发布时间:{{ item.createdAt }}</p>
                        <div class="content">
                            {{item.content}}
                        </div>
                        <p class="btn" @click="toDetail()">查看全文</p>
                    </article>
                  
                </div>
                
           
            
        </div>
        <div class="rightList">
                 <div class="hotTag">
                   <h1>热门标签</h1>
                    <div class="Tags">
                        <span v-for="item in tags" :key="item.id">{{ item.name }}</span>
                       
                    </div>
                 </div>
                 <div class="hotTag">
                   <h1>热门标签</h1>
                    <div class="Tags">
                        <span v-for="item in tags" :key="item.id">{{ item.name }}</span>
                    </div>
                 </div>
        </div>
       
    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import { getBlogsListApi} from '../../api/blog.js'
import {queryTagsApi} from '../../api/tag.js'
const blogs=ref({})
const tags=ref({})
const getBlogs= async ()=>{
  const res= await getBlogsListApi()
  blogs.value=res.data.blogs
//   console.log(res.data)
}
const getTags= async ()=>{
    const res=await queryTagsApi()
    tags.value=res.data.tags
}
const toDetail =()=>{

}
onMounted(() => {
     getBlogs()
     getTags()
})
</script>

<style scoped>
.line{
    width: 780px;
    height: 2px;
    background-color: #9e9292;
}
.tagsContainer{
    display: flex;

   width: 500px;
   height: 200px;
}
.tagsContainer span{
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-top: 10px;
    border: #8a8e8f 2px solid;
}
.tagsContainer span:hover{
    color:#8a8e8f;
}
.container {
    width: 100%;
    height: 800px;
    display: flex;
    justify-content:center ;
    align-items: center;
    overflow: scroll ;

}
.container::-webkit-scrollbar {
      width: 1px; /* 设置滚动条宽度 */
    }
.articles {
    width: 780px;
    height: 100%;
    margin: 0%;
    margin-bottom: 10px;
}



article {
    width: 780px;
    height: 200px;
    border: solid 1px;
    box-shadow: 1px 1px 2px 2px;
    margin-top: 10px;
    margin-bottom: 10px;
}

article .title {
    height: 50px;
    font-size: 20px;

}

article .content {
    height: 80px;
    overflow: hidden;
}

article .btn {
    position: relative;
    left: 700px;
    width: 70px;
    background-color: #14c5e4;


}

article .author {
    height: 30px;
    font-size: medium;
}

article .author a {
    text-decoration: none;
}

.articleList {
    width: 800px;
    height: 900px;
    
}

.tagRouter {
    margin-top: 80px;
    height: 50px;
    width: auto;
}

.tagRouter span a {

    text-decoration: none;
}

.rightList {
    width: 400px;
    height: 900px;
    flex-wrap: wrap;
    
}
.rightList .hotTag{
    margin-top: 100px;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    border: #8a8e8f solid;

}
.rightList .hotTag .Tags{
    display: flex;
    flex-wrap: wrap;
}
.rightList .hotTag .Tags span{
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-top: 10px;
    border: #8a8e8f 2px solid;
}
.rightList .hotTag .Tags span:hover{
    color:#8a8e8f;
}
</style>