<template>
  <div id='login'>
    <ul>
      <li><input type='text' placeholder='username' /></li>
      <li><input type='text' placeholder='password' /></li>
      <li><button @click="$emit('remove', todo.id)">login</button></li>
      <el-button>默认按钮</el-button>
      <el-form-item>
        <el-button type="primary" @click="loginSubmit('loginForm')">登录</el-button>
        <el-button type="primary" @click="onRegit('loginForm')">注册</el-button>
      </el-form-item>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
};
</script>

<style>
#login{
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: list-item ;
  width: 100%;
  margin: 10px 0px;
}
input{
  width: 10%;
  padding: 7px 10px;
  border: 1.5px solid ;
}
button{
  width: auto;
  padding: 7px 10px;
  border: 1.5px solid blue;
}
</style>
