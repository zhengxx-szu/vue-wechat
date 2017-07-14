<template>
  <div id="chat">
    <div class="left">
      <search></search>
      <chatlist></chatlist>
    </div>
    <div class="right">
      <chatdetail></chatdetail>
    </div>
  </div>
</template>
<script>
import search from '../components/search'
import chatlist from '../components/chatlist'
import chatdetail from '../components/chatdetail'
export default {
  components: {
    search,
    chatlist,
    chatdetail
  }
}
</script>
<style>
#chat {
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
