<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝Pizza！</h1>
        <p>这里有你喜欢的Pizza</p>
        <button @click="goToHistory" class="btn btn-success">Let's Order!</button>
      </div>
    </div>
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

