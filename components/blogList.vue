<template>
  <div class="blogList">
    <el-card
      class="card-container"
      :body-style="{ padding: '0px' }"
      v-for="(item,index) in blogList"
      :key="index"
    >
      <div class="card-image">
        <img src="@/assets/image/top.jpeg" alt width="100%" height="250" />
      </div>
      <div class="card-content">
        <div class="title font-medium">{{item.title}}</div>
        <div class="content font-info">{{item.summary}}</div>
        <div class="button">
          <el-button
            icon="el-icon-right"
            class="button-item"
            size="small"
            @click="showDetail(item)"
          >查看详细</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import Blog from "@/server/api/blog";

export default {
  name: "blogList",
  data() {
    return {
      blogList: []
    };
  },
  methods: {
    getBlogList() {
      Blog.getBlog().then(res => {
        if (res) {
          this.blogList = res;
        }
      });
    },
    showDetail(blog) {
      let id = blog.id;
      this.$router.push({ name: "blogDetail", params: { id: id } });
    }
  },
  created() {
    this.getBlogList();
  }
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