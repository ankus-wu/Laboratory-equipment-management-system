
<template slot-scope="{row,$index}">
  <div>
    <el-container>
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>学校固定资产数据表</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>设备资产追踪变动表</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>谭老师所管辖的实验室设备表</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
  <el-container>
    <el-header>
      <h2>设备管理列表</h2>
    </el-header>
    <el-main>
      <el-button-group class='edit'>
      <el-button type="primary" icon="el-icon-edit" ></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <el-table :data="tableData3" border size="mini" fit highlight-current-row height="500" :row-style="rowStyle" @row-dblclick="rowDblclick" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.3)">
        <el-table-column type="selection" width="55" ></el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="time" label="时间"></el-table-column>
        <el-table-column prop="name" label="使用者"></el-table-column>
        <el-table-column prop="computer" label="电脑类型"></el-table-column>
        <el-table-column prop="type" label="型号"></el-table-column>
        <el-table-column prop="selfnum" label="自编固定资产编号"></el-table-column>
        <el-table-column prop="institutenum" label="学院固定资产编号"></el-table-column>
        <el-table-column prop="unique" label="服务代号S/N或唯一代号"></el-table-column>
        <el-table-column prop="record" label="增购配件记录"></el-table-column>
        <el-table-column prop="maintainrecord" label="维修记录"></el-table-column>
        <el-table-column prop="remark" label="备注-变动情况"></el-table-column>
      </el-table>
      <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </el-main>
    <el-footer>
      <h2>by team 11</h2>
    </el-footer>
  </el-container>
</el-container>
  <operate></operate>

</div>
</template>

<script>
import operate from './operate.vue'
export default {
  name:'test',
  // 这里是传入的数据
  data(){
    return {
      tableData3: [
        {id: 1,
         name:'无人车项目',
         computer:'手提',
         type:'惠普（银色） i7-6500U/8G/500G/15.6英寸',
         selfnum:'39000003348/2016C045',
        record:'王焕宇之前用，现无人车项目借用',
       },
         {date: '2016-05-03',
          name: '王佳怡',},
        ]
    }
  },
  components: {operate}
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #409EFF;
    color: #FFFFFF;
    text-align: center;
    line-height: 20px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 10px;
  }
  .edit{
    text-align: right;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
