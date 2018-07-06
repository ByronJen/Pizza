<template>
  <h1>
    Admin.
  </h1>
</template>
<script>
export default {
  data(){
    return {
      name:"Byron"
    }
  },
  //beforeRouteEnter 每次进入组件之前
  // beforeRouteEnter:(to,from,next)=>{
  //   // alert("Hello " + this.name);//此时获取不到this.name 因为data()尚未执行
  //   // next();//可以继续显示该页面，beforeRouteEnter执行完后
  //   next(vm=>{
  //     alert("Hello " + vm.name)
  //   })
  // }
  //beforeRouteLeave 每次离开组件之前
  beforeRouteLeave:(to,from,next)=>{
    confirm("确定离开？")?next():next(false);
  }

}
</script>

