<template>
  <div id="app">
    <div class="bg">
    </div>
    <div class="nav">
      <left-nav></left-nav>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import leftNav from './components/menu'
export default {
  components: {
    leftNav
  },
  mounted () {
    this.$store.dispatch('initData')
  },
  name: 'app'
}
</script>
<style>
html, body, div, input, button {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url('../static/images/bg.jpg');
  filter: blur(20px);
}
#app {
  display: flex;
  width: 860px;
  height: 640px;
  margin: 20px auto;
}

.nav {
  display: inline-block;
  width: 60px;
  height: 640px;
  background: #fad;
}

.main {
  display: inline-block;
  width: 800px;
  height: 640px;
  background: #adb;
}
</style>
