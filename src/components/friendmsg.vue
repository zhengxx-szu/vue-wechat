<template>
  <div id="msg">
    <div class="base_msg">
      <span class="f_name">{{selectedFriend.nickname}}</span>
      <img :src="(selectedFriend.sex == 1)?'../../static/images/man.png':'../../static/images/woman.png'" class="f_sex">
      <span class="f_signature">{{selectedFriend.signature}}</span>
      <img :src="selectedFriend.img" class="f_avatar">
    </div>
    <div class="detail_msg">
      <div class="remark">
        <span>备注</span>{{selectedFriend.remark}}
      </div>
      <div class="area">
        <span>地区</span>{{selectedFriend.area}}
      </div>
      <div class="wxid">
        <span>微信号</span>{{selectedFriend.wxid}}
      </div>
    </div>
    <div class="send_msg">
      <button @click="send()">发消息</button>
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['selectFriendId']),
    ...mapGetters(['selectedFriend'])
  },
  methods: {
    ...mapActions(['send'])
  }
}
</script>
<style>
#msg {
  padding-top: 100px;
  padding-left: 90px;
  padding-right: 90px;
}
.base_msg {
  position: relative;
  height: 60px;
  padding-bottom: 45px;
  border-bottom: 1px solid #ddd;
}
.base_msg .f_name {
  font-size: 18px;
}
.base_msg .f_sex {
  width: 16px;
  height: 16px;
}
.base_msg .f_signature {
  display: block;
  color: #999;
  font-size: 14px;
  padding-top: 10px;
}
.base_msg .f_avatar {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  border-radius: 3px;
}
.detail_msg {
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #ddd;
}
.remark, .area, .wxid {
  font-size: 14px;
  height: 35px;
  line-height: 35px;
}
.remark span, .area span, .wxid span {
  display: inline-block;
  width: 100px;
  color: #999;
}
.send_msg {
  padding-top: 55px;
  text-align: center;
}
.send_msg button {
  width: 140px;
  height: 38px;
  color: #fff;
  background: #1aad19;
  border-radius: 3px;
}
</style>
