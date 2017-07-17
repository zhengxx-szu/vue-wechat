<template>
  <div id="chatlist">
    <div class="chat_info" :class="(item.id == selectChatId)?'chat_select':''" v-for="item in searchedChatlist" @click="selectChat(item.id)">
      <div class="chat_avatar">
        <img :src="item.user.img">
      </div>
      <div class="chat_name">
        <span>{{item.user.name}}</span>
      </div>
      <div class="chat_time">
        <span>{{item.messages[item.messages.length-1].date | formatdate}}</span>
      </div>
      <div class="chat_content">
        <span>{{item.messages[item.messages.length-1].content}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState(['selectChatId']),
    ...mapGetters(['searchedChatlist'])
  },
  filters: {
    formatdate (date) {
      let time = new Date()
      date = new Date(date)
      if (time.getFullYear() === date.getFullYear() && time.getMonth() === date.getMonth() && time.getDate() === date.getDate()) {
        if (date.getHours() < 10) {
          time = '0' + date.getHours() + ':'
        } else {
          time = date.getHours() + ':'
        }
        if (date.getMinutes() < 10) {
          time += '0' + date.getMinutes()
        } else {
          time += date.getMinutes()
        }
        date = time
      } else if (time.getFullYear() === date.getFullYear()) {
        date = date.getMonth() + 1 + '-' + date.getDate()
      } else {
        date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      }
      return date
    }
  },
  methods: {
    ...mapActions(['selectChat'])
  }
}
</script>
<style scoped>
#chatlist {
  width: 100%;
  height: 580px;
  overflow-y: auto;
}
#chatlist::-webkit-scrollbar {
  position: absolute;
  width: 8px;
  height: 80px;
}
#chatlist::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #cbc8c6;
}
.chat_info {
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
}
.chat_info:hover {
  background: #d9d8d8;
}
.chat_select {
  background: #c6c7c7;
}
.chat_select:hover {
  background: #c6c7c7;
}
.chat_avatar {
  margin-left: 10px;
  margin-top: 10px;
}
.chat_avatar img {
  width: 40px;
  height: 40px;
}
.chat_name {
  margin-top: 10px;
  margin-left: 10px;
  height: 20px;
  line-height: 20px;
  vertical-align: top;
}
.chat_name span {
  font-size: 14px;
}
.chat_content {
  position: absolute;
  left: 60px;
  bottom: 10px;
  width: 180px;
  color: #999;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.chat_time {
  position: absolute;
  top: 12px;
  right: 12px;
  color: #999;
  font-size: 12px;
}
</style>
