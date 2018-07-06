<template>
  <div>
    <button @click="goToHistory" class="btn btn-success">Let's Order!</button>
  </div>
</template>
<script>
export default {
  methods:{
    goToHistory(){
      //跳转到上一个浏览的页面
      // this.$router.go(-1);
      
      //跳转到指定的页面
      // this.$router.replace("/menu");

      //跳转到指定路由对应的地址
      // this.$router.replace({name:'menuLink'})

      //通过push进行跳转 
      this.$router.push({name:'menuLink'})
    }
  }
}
</script>

