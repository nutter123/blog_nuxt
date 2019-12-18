<!--
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 15:43:36
 * @LastEditors: nut
 * @LastEditTime: 2019-12-18 11:34:59
 -->
<template>
  <div class="slide">
    <div class="logo slide-item">
      NU
      <span class="color-d font-bold logo-tt">TT</span>ER
    </div>
    <div class="slide-item" v-for="(item,index) in list" :key="index" @click="toUrl(item.url)">
      <div class="text-center">
        <div class="icon">
          <i class="el-icon-mobile-phone"></i>
        </div>
        <div class="text font-info">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide",
  data() {
    return {
      list: [
        { name: "主页", url: "home" },
        { name: "博客", url: "blog" },
        { name: "收藏", url: "project" }
      ]
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.slide {
  width: 6rem;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: #4e4e4e55;
  backdrop-filter: blur(3px);
  color: #eeeeee;
  cursor: pointer;
  .logo-tt {
    font-size: 24px;
    margin-bottom: 4px;
  }
}
.slide-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide-item::before {
  content: "";
  padding-top: 100%;
}
.slide-item:hover {
  backdrop-filter: blur(3px);
}
.logo {
  background: rgba(153, 102, 204, 1);
}
.icon {
  padding: 10px;
  //   background: url(../assets/icon/logo.png) no-repeat center;
}
.color-b {
  // color: $color-d;
}

/*滚动条样式*/
.slide::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
}
.slide::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.slide::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>