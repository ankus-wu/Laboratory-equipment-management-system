<template>
  <el-row>
    <el-col :span="24" >
      <el-card :body-style="{ padding: '0px'}" class="card-box">
        <div slot="header" class="clearfix">
          <span class="titleTag"><el-tag >归还验收</el-tag></span>
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
          <div class="bottom clearfix">
            <div class="yes-no">
              <el-popover placement="top" width="350" v-model="visible">
                <p style="margin-bottom: -25px">设备状态</p>
                <div style="margin-left: 220px; margin-bottom: 10px">
                  <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                  <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                </div>
                <el-radio v-model="radio" label="1">完好</el-radio>
                <el-radio v-model="radio" label="2">损坏</el-radio>
                <el-radio v-model="radio" label="3">其他 <el-input style="width:90px" v-model="input" placeholder="请输入"></el-input></el-radio>
                <el-button slot="reference" type="primary" size="small" style="margin-right:10px">验收</el-button>
              </el-popover>
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
    data() {
      return {
        radio: '1',
        input: '',
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
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
    },
    components: {}
  }
</script>

<style>

</style>
