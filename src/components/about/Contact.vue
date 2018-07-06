<template>
  <div>
    <h1>Contact</h1>
    <router-link tag="li" class="btn btn-success" :to="{name:'phoneLink'}">电话</router-link>
    <router-link tag="li" class="btn btn-success" :to="{name:'emailLink'}">邮箱</router-link>
    <p><router-view></router-view></p>
  </div>
</template>
