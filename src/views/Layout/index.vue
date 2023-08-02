<script setup>
import LayoutBottom from './components/LayoutBottom.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutMain from './components/LayoutMain.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
       <div class="containers">
          <LayoutHeader/>
          <router-view></router-view>  
          <LayoutBottom/>
       </div>
      
  
</template>
<style scoped>
.containers{
      width: 100%;
      height: 100%;
      background: url(../../assets/image/shuangbao.png);
}
</style>