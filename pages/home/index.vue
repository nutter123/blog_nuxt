<template>
  <div class="blogList">
    <transition-group
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      tag="div"
    >
      <el-card
        class="card-container"
        :body-style="{ padding: '0px' }"
        v-for="(item) in blogList"
        :key="item.id"
      >
        <blogItem :item="item"></blogItem>
      </el-card>
    </transition-group>
  </div>
</template>

<script>
import Blog from "@/server/api/blog";
import blogItem from "@/components/blogItem";

export default {
  name: "blogList",
  data() {
    return {};
  },
  components: { blogItem },
  async asyncData({ $axios }) {
    let res = await $axios.$get("/blog/new");
    return {
      blogList: res
    };
  },
  methods: {
    // showDetail(blog) {
    //   let id = blog.id;
    //   this.$router.push({ name: "home-id", params: { id: id } });
    // }
    beforeEnter(el) {
      console.log("打印dom元素", el);
      // el.style.animationDelay = "4s"
    },
    enter(el, done) {
      let delayNum = "." + el.dataset.index * 100 + "s";
      el.style.animationDelay = delayNum;
      console.log("输出值效果", delayNum, el.dataset, el, done);
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.box-content {
  padding: 0.75rem;
  .card-container + .card-container {
    margin-top: 1.5rem;
  }
}
.container {
  display: flex;
  justify-content: space-around;
  .title {
    margin: 10px 0 5px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }
  .content {
    margin: 5px 0;
    font-size: 13px;
    line-height: 24px;
    color: #999;
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
.card-title {
  color: #7a7a7a;
  font-size: 1.3rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1em;
}
.card-children {
  border-left: 1px solid #dbdbdb;
  margin: 0.75em 0 0.75em 0.75em;
  padding-left: 0.75em;
}
.card-item {
  border-radius: 2px;
  color: #4a4a4a;
  padding: 0.5em 0.75em;
  align-items: center;
  justify-content: space-between;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: whitesmoke;
    color: #363636;
  }
  .tag {
    align-items: center;
    background-color: whitesmoke;
    border-radius: 4px;
    color: #4a4a4a;
    display: inline-flex;
    font-size: 0.75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: 0.75em;
    padding-right: 0.75em;
    white-space: nowrap;
  }
}
.card-content {
  padding: 1rem;
}
</style>