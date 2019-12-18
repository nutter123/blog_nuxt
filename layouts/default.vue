<!--
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 11:14:45
 * @LastEditors: nut
 * @LastEditTime: 2019-11-01 16:38:36
 -->
<template>
  <div class="body">
    <top></top>
    <nuxt />
  </div>
</template>
<script>
import Top from "@/layouts/top";
export default {
  name: "app",
  components: {
    Top
  }
};
</script> 
<style lang="scss">
  @import '../assets/scss/styles.scss';
  .body{
    height:100%;
  }
</style>
