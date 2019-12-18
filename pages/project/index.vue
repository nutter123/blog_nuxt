<!--
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 15:49:26
 * @LastEditors: nut
 * @LastEditTime: 2019-11-01 16:00:47
 -->
<template>
  <div class="project">
    <div class="container flex-1">
    </div>
  </div>
</template>

<script>
import Slide from "@/layouts/slide";
export default {
  name: "project",
    components: {
    Slide
  }
};
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #eee;
  background: #eaeaea;
}
.container {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 50px;
}
</style>