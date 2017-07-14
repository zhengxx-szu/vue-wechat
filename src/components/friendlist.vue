<template>
  <div id="friendlist">
    <div class="friend_info" :class="(item.id == selectFriendId)?'friend_select':''" v-for="item in searchedFriendlist" @click="selectFriend(item.id)">
      <div class="friend_avatar">
        <img :src="item.img">
      </div>
      <div class="friend_name">
        <span>{{item.remark}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState(['selectFriendId', 'searchText']),
    ...mapGetters(['searchedFriendlist'])
  },
  methods: {
    ...mapActions(['selectFriend'])
  }
}
</script>
<style>
#friendlist {
  width: 100%;
  height: 580px;
  overflow-y: auto;
}
#friendlist::-webkit-scrollbar {
  position: absolute;
  width: 8px;
}
#friendlist::-webkit-scrollbar-track-piece {
  background-color: #dfdede;
}
#friendlist::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #cbc8c6;
}
.friend_info {
  display: flex;
  width: 100%;
  height: 60px;
}
.friend_info:hover {
  background: #d9d8d8;
}
.friend_select {
  background: #c6c7c7;
}
.friend_select:hover {
  background: #c6c7c7;
}
.friend_avatar {
  margin-left: 15px;
  margin-top: 12px;
}
.friend_avatar img {
  width: 36px;
  height: 36px;
}
.friend_name {
  margin-left: 15px;
  height: 60px;
  line-height: 60px;
}
.friend_name span {
  font-size: 14px;
}
</style>
