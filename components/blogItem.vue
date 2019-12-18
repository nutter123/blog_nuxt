<!--
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-06 13:59:43
 * @LastEditors: nut
 * @LastEditTime: 2019-11-06 16:47:43
 -->
<template>
  <div class="blogItem">
    <nuxt-link :to="'/home/'+item.id" class="wrap-img">
      <img src="@/assets/image/top.jpeg" class="img" alt width="100%" height="250" />
    </nuxt-link>
    <div class="content">
      <nuxt-link :to="'/home/'+item.id" class="title" target="_blank">{{item.title}}</nuxt-link>
      <p class="summary wraps">{{item.summary}}</p>
      <div class="meta">
        <span>
          <i class="el-icon-view"></i>
          {{item.readSize}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="scss" scoped>
.blogItem {
  position: relative;
  width: 100%;
  padding: 10px 0 5px;
  word-wrap: break-word;
  line-height: 20px;
}
.wrap-img {
  width: 150px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  .img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    vertical-align: middle;
  }
}
.content {
  padding-right: 165px;
  padding-left: 20px;
}
.title {
  margin: 0 0 5px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  &:hover {
    text-decoration: underline;
  }
}
.summary {
  margin: 0 0 5px;
  font-size: 13px;
  line-height: 20px;
  color: #999;
}
.meta {
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  span {
    margin-right: 10px;
    color: #b4b4b4;
  }
}
</style>