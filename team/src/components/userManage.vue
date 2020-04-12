<template slot-scope="{row,$index}">
  <div>
    <el-main>
      <el-input
          class="searchUser"
          placeholder="请输入内容"
          v-model="input"
          clearable>
          </el-input>
      <el-table :data="tableData" class="userTable" max-height="450" style="width: 63%" :default-sort = "{prop: 'id', order: 'ascending'}">
        <el-table-column
          type="index"
          sortable
          width="180">
          </el-table-column>
        <el-table-column
          prop="userName"
          label="用户名"
          sortable
          width="180">
          </el-table-column>
        <el-table-column
          prop="identity"
          label="身份"
          sortable
          width="180">
          </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          sortable
          width="180">
          </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
          </el-table-column>
        </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40">
        </el-pagination>
      </el-main>
</div>
</template>

<script>

export default {
  name:'test',
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      filterTag(value, row) {
        return row.currentState === value;
      },
    },
  data(){
    return {
      input: '',
      tableData: [
        {userName:'张三',
         identity:'超级管理员',
         status:'有效',
        },
        {userName:'张三',
         identity:'管理员',
         status:'过期',
        },
        {userName:'张三',
         identity:'管理员',
         status:'有效',
        },
        {userName:'张三',
         identity:'超级管理员',
         status:'有效',
        },
        ]
    }
  },
  components: {}
}
</script>
<style>
  .el-main {
    color: #333;
    line-height: 30px;
  }
  .userTable{
    margin-left: 270px;
  }
  .el-pagination{
    margin-top: 20px;
  }
  .searchRepo{
    width: auto;
  }
  .searchUser{
    width: auto;
    margin-right: -550px;
  }
</style>
