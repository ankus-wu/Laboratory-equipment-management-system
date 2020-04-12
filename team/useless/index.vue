<template slot-scope="scope">
<div>
  <home></home>
</div>
</template>

<script>
  import repository from './repository.vue'
  import home from './home.vue'
  export default {
    name: "index",
    data(){
        return {

        }
    },
    components: {repository,home}
  }

</script>
<style>
.title {
    text-align: center;
    margin: 0px auto 0px auto;
    color: #409EFF;
    font-size: 30px;
    font-weight: bold;
}
</style>
<el-dialog title="验收确认" :visible.sync="dialogFormVisible">
  <el-form :model="form">
  </el-form-item>
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
      prop="borrower"
      label="借用人"
      width="150">
      </el-table-column>
    <el-table-column
      prop="backTime"
      label="归还时间"
      width="150">
      </el-table-column>
    <el-table-column
      prop="note"
      label="备注"
      width="330">
      </el-table-column>
    </el-table>
  <span style="margin-right:70px;margin-left:-70px">设备状态</span>
    <el-radio v-model="radio" label="1">完好</el-radio>
    <el-radio v-model="radio" label="2">损坏</el-radio>
    <el-radio v-model="radio" label="3">其他 <el-input v-model="input" placeholder="请输入内容"></el-input></el-radio>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
