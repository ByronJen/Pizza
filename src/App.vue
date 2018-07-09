<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <router-view name="ordingGuide"></router-view>
        </div>
        <div class="col-md-4 col-sm-12">
          <router-view name="history"></router-view>
        </div>
        <div class="col-md-4 col-sm-12">
          <router-view name="delivery"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header"
export default {
  components:{
    appHeader:Header
  },
  created(){
    //fetch跨域请求接口，结合config目录下index.js配置 apis/
    // fetch("/apis/test/testToken.php",{
    //   method:"post",
    //   headers:{
    //     "Content-type":"application/json",
    //     token:"f4c902c9ae5a2a9d8f84868ad064e706",
    //   },
    //   body:JSON.stringify({
    //     username:"Byron",password:"123456"
    //   })
    // })
    // .then(result =>{
    //   // console.log(result);
    //   return result.json();
    // })
    // .then(data=>{
    //   console.log(data);
    // })

    //axios main.js中设置的token
    this.$axios.post("/apis/test/testToken.php",{username:"Byron",password:"123456"})
    .then(data=>{
      return data;
    })

  },
}
</script>
