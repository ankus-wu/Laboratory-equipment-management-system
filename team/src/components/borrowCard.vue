<template>
  <el-row>
    <el-col :span="24" >
      <el-card :body-style="{ padding: '0px'}" class="card-box">
        <div slot="header" class="clearfix">
          <span class="titleTag"><el-tag type="success" >申请借出</el-tag></span>
          </div>
        <div style="padding: 14px;">
          <el-table
            class="applicationDetails"
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="assetsName"
              label="资产名称"
              width="180">
              </el-table-column>
            <el-table-column
              prop="number"
              label="数量"
              width="120">
              </el-table-column>
            <el-table-column
              prop="proposer"
              label="申请人"
              width="150">
              </el-table-column>
            <el-table-column
              prop="prebackTime"
              label="拟归还时间"
              width="150">
              </el-table-column>
            <el-table-column
              prop="reason"
              label="申请原因"
              width="200">
              </el-table-column>
            <el-table-column
              prop="note"
              label="备注"
              width="150">
              </el-table-column>
            </el-table>
          <div class="bottom clearfix">
            <div class="yes-no">
              <el-button type="success" size="small" @click="pass">通过</el-button>
              <el-button type="danger" size="small" @click="refuse">拒绝</el-button>
              </div>
            </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      pass() {
        this.$confirm('是否确定通过申请, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '通过成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消通过'
          });
        });
      },
      refuse() {
        this.$confirm('是否确定拒绝申请, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '拒绝成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消拒绝'
          });
        });
      }
    }
  }
</script>

<style>
  .yes-no{
    margin-right: -750px;
    margin-top: 5px;
  }
  .card-box{
    width: 1000px;
    margin-left: 200px;
  }
  .titleTag{
    margin-left: -800px;
    margin-top: 15px
  }
  .applicationDetails{
    margin-left: 20px;
  }
  .clearfix{
    height: 20px;
  }
</style>
