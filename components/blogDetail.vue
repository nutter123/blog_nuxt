<!--
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 15:46:09
 * @LastEditors: nut
 * @LastEditTime: 2019-11-01 16:03:42
 -->
<template>
  <div class="blog-detail">
    <el-card class="card-container" :body-style="{ padding: '0px' }">
      <div class="card-image">
        <img src="@/assets/image/top.jpeg" alt width="100%" height="250" />
      </div>
      <div class="card-content">
        <div class="title">{{blog.title}}</div>
        <div class="content" v-html="blog.content"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import Blog from "@/server/api/blog";

export default {
  name: "blogDetail",
  data() {
    return {
      blog: {}
    };
  },
  methods: {
    getDetail() {
      let id = this.$route.params.id;
      Blog.getDetail(id).then(res => {
        if (res) {
          this.blog = res;
        }
      });
    }
  },
  mounted() {
    this.getDetail();
  }
};
</script>

<style>
.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #363636;
  font-weight: 400;
}
.card-content {
  padding: 1rem;
}
</style>