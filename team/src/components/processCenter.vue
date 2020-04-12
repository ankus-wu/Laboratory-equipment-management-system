
<template>
  <div>
    <el-container>
      <el-header class="processHeader">
        新增{{value="1"}}待处理项
        <el-badge :value="1" class="item">
          <el-tag type="success" >申请借出</el-tag>
        </el-badge>
        <el-badge :value="1" class="item">
          <el-tag >归还验收</el-tag>
        </el-badge>
      </el-header>
      <el-main>
        <borrowCard></borrowCard>
        <returnCard></returnCard>
      </el-main>
      </el-container>
    </div>
</template>
<script>
  import borrowCard from './borrowCard.vue'
  import returnCard from './returnCard.vue'
  export default {
    name: "processCenter",
    data(){
        return {

        }
    },
    methods: {

    },
    components: {borrowCard,returnCard}
  }
</script>

<style>
  .el-main {
    color: #333;
    line-height: 50px;
  }
  .processHeader{
    margin-left: -700px;
    margin-top: 10px;
    margin-bottom: -20px;
  }
  .item{
    margin-left: 20px;
  }
</style>
