
<template slot-scope="{row,$index}">
  <div>
    <el-main>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">导出</el-button>
        <el-button type="primary">导入<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      <el-input
          class="searchRepo"
          placeholder="请输入内容"
          v-model="input"
          clearable>
          </el-input>
      <el-table :data="tableData" class="assetsTable" max-height="430" style="width: 63%" :default-sort = "{prop: 'id', order: 'ascending'}">
        <el-table-column
          type="index"
          sortable
          width="120">
          </el-table-column>
        <el-table-column
          prop="assetName"
          label="资产名称"
          sortable
          width="180">
          </el-table-column>
        <el-table-column
          prop="assetId"
          label="资产编号"
          sortable
          width="180">
          </el-table-column>
        <el-table-column
          prop="number"
          label="数量"
          sortable
          width="120">
          </el-table-column>
        <el-table-column
          prop="currentState"
          label="当前状态"
          width="180"
          :filters="[{ text: '在库', value: '在库' }, { text: '借出', value: '借出' },{ text: '损坏', value: '损坏' }, { text: '待审核', value: '待审核' }]"
          :filter-method="filterTag"
          >
          </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
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
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'损坏',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'待审核',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'借出',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'在库',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'在库',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'在库',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'在库',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'损坏',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'在库',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'在库',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'损坏',
        },
        {assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'在库',
        },
        {
         assetName:'可编程无人机',
         assetId:'2019010121',
         number:'1',
         currentState:'在库',
        },
        ]
    }
  },
  components: {}
}
</script>
<style>
  .el-button-group{
    margin-right: 500px;
  }
  .assetsTable{
    margin-left: 270px;
  }
</style>
