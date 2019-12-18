<!--
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-09-23 15:36:45
 * @LastEditors  : nut
 * @LastEditTime : 2019-12-18 11:33:59
 -->
<template>
  <div class="top">
    <div class="container">
      <div class="logo">NUTTER</div>
      <el-menu
        class="menu"
        :default-active="this.$route.path"
        background-color="#ffffff"
        text-color="#000"
        active-text-color="#3273dc"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item index="/">
          <template slot="title">主页</template>
        </el-menu-item>
        <el-menu-item index="/blog">
          <template slot="title">博客</template>
        </el-menu-item>
        <el-menu-item index="/project">
          <template slot="title">收藏</template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      loginStatus: false,
      list: [
        { name: "主页", url: "/" },
        { name: "博客", url: "/blog" },
        { name: "收藏", url: "/project" }
      ]
    };
  },
  mounted() {
    let info = localStorage.getItem("info");
    if (info !== null && info.id !== null) {
      this.loginStatus = true;
    }
  },
  methods: {
    toUrl(url) {
      if (url != "logout") {
        this.$router.push({ name: url });
      } else {
        localStorage.clear();
        this.$router.push({ name: "home" });
      }
    },
    login() {
      this.$router.push({ name: "login" });
    },
    loginout() {
      localStorage.clear();
      this.loginStatus = false;
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  background: #fff;
  position: relative;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
}
.logo {
  font-weight: bold;
  font-size: 16px;
  margin: 0 10px;
}
.menu {
  height: 60px;
  font-size: 14px;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.right {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}
</style>