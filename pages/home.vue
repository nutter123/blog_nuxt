<!--
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-09-23 14:43:14
 * @LastEditors: nut
 * @LastEditTime: 2019-11-06 10:36:39
 -->
<template>
  <div class="box-container">
    <div class="home">
      <div class="container">
        <div class="side-left"></div>
        <div class="box-content flex-1">
          <transition name="fade" mode="out-in">
            <nuxt-child/>
          </transition>
        </div>
        <div class="side-right box-content">
          <blog-side :sortList="sortList"></blog-side>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogSide from "@/components/blogSide";
import Sort from "@/server/api/sort";

export default {
  name: "home",
  components: { BlogSide },
  data() {
    return {};
  },
  async asyncData({$axios}) {
    let res = await $axios.$get('/sort/new');
    return {
      sortList: res
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #eee;
}
.container {
  display: flex;
  justify-content: space-around;
  .title {
    letter-spacing: 3px;
    color: #242424 !important;
  }
  .content {
    margin-top: 1.5rem;
  }
  .button {
    margin-top: 1.5rem;
    .button-item {
      background-color: #e8e8e8;
      border-color: transparent;
      color: #363636;
    }
  }
}
.side-left {
  flex: none;
  width: 0;
}
.side-right {
  flex: none;
  width: 25%;
  padding: 0 0.75rem;
}
.box-content {
  padding: 0.75rem;
  .card-container + .card-container {
    margin-top: 1.5rem;
  }
}
//路由过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>