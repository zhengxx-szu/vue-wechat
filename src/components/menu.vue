<template>
  <div class="menu_wrap">
    <div class="avatar">
      <img src="../assets/user_avatar.jpg">
    </div>
    <div class="menu_list">
      <router-link to="/chat" class="icon iconfont icon-xiaoxi"></router-link>
      <router-link to="/friends" class="icon iconfont icon-changyongxinxi"></router-link>
      <router-link to="/friends" class="icon iconfont icon-shezhi"></router-link>
    </div>
    <div class="footer"><i class="iconfont icon-mulu"></i></div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.menu_wrap {
  position: relative;
  background: #333;
  width: 100%;
  height: 100%;
}
.avatar {
  padding-top: 20px;
  padding-left: 12px;
}
.avatar img {
  width: 35px;
  height: 35px;
}
.icon {
  display: block;
  margin-top: 30px;
  font-size: 25px;
  text-align: center;
  color: #8c8c8c;
  text-decoration: none;
}
.icon:hover, .active {
  color: #09bb07;
}
.footer {
  position: absolute;
  left: 17px;
  bottom: 20px;
}
.icon-mulu {
  font-size: 25px;
  text-align: center;
  color: #8c8c8c;
}
.icon-mulu:hover {
  color: #09bb07;
}
</style>
