<template>
  <div id="friends">
    <div class="left">
      <search></search>
      <friendlist></friendlist>
    </div>
    <div class="right">
      <friendmsg></friendmsg>
    </div>
  </div>
</template>
<script>
import search from '../components/search'
import friendlist from '../components/friendlist'
import friendmsg from '../components/friendmsg'
export default {
  components: {
    search,
    friendlist,
    friendmsg
  }
}
</script>
<style>
#friends {
  display: flex;
  width: 100%;
  height: 100%;
}
.left {
  display: inline-block;
  width: 250px;
  height: 100%;
  background: #EDEAE8;
}
.right {
  display: inline-block;
  width: 550px;
  height: 100%;
  background: #F5F5F5;
}
</style>
