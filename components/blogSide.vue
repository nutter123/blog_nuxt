<!--
 * @Descripttion: 
 * @version: 
 * @Author: nut
 * @Date: 2019-11-01 15:46:09
 * @LastEditors: nut
 * @LastEditTime: 2019-11-04 10:59:38
 -->
<template>
  <div class="blog-side">
    <el-card class="card-container box-content" :body-style="{ padding: '0px' }">
      <div class="card-title">分类</div>
      <div>
        <div v-for="item in sortList" :key="item.id">
          <div class="card-item">
            <span>{{item.label}}</span>
            <span class="tag">{{item.blog.length}}</span>
          </div>
          <div class="card-children" v-if="item.children">
            <div class="card-item" v-for="itemC in item.children" :key="itemC.id">
              <span>{{itemC.label}}</span>
              <span class="tag">{{itemC.blog.length}}</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="card-container box-content" :body-style="{ padding: '0px' }">
      <div class="card-title">归档</div>
      <div>
        <div v-for="item in sortList" :key="item.id">
          <div class="card-item">
            <span>{{item.label}}</span>
            <span class="tag">{{item.blog.length}}</span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "blogSide",
  data() {
    return {};
  },
  props:['sortList'],
  methods: {

  },
  created() {

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