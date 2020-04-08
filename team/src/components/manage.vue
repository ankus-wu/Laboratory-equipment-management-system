<template slot-scope="scope">
<div>
  
  <test></test>
</div>
</template>

<script>
  import list from './list.vue'
  import test from './test.vue'
  export default {
    name: "manage",
    data(){
        return {

        }
    },
    components: {list,test}
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
