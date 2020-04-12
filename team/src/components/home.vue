<template slot-scope="{row,$index}">
<el-container>
  <el-header>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="处理中心" name="first">
        <processCenter></processCenter>
      </el-tab-pane>
      <el-tab-pane label="资产库" name="second">
          <repository></repository>
        </el-tab-pane>
      <el-tab-pane label="用户管理" name="third">
        <userManage></userManage>
      </el-tab-pane>
      </el-tabs>
    </el-header>
  </el-container>
</template>

<script>
  import repository from './repository.vue'
  import processCenter from './processCenter.vue'
  import userManage from './userManage.vue'
  export default {
    name: "home",
    data(){
        return {
          activeName: 'second'
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {repository,processCenter,userManage}
  }

</script>

<style>
  .el-header, .el-footer {
    background-color: #FFFFFF;
    color: #606266;
    line-height: 30px;
  }
  .el-tab-pane{
    color: #E6A23C
  }
</style>
