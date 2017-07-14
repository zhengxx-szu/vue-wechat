<template>
  <div id="chatdetail">
    <div class="chat_name">
      <span>{{selectedChat.user.name}}</span>
      <i class="iconfont icon-gengduo"></i>
    </div>
    <div class="chat_box" ref="msglist">
      <div class="chat_wrap" v-for="item in selectedChat.messages">
        <div class="msg_date">
          <span>{{item.date | formatdate}}</span>
        </div>
        <div class="msg_wrap" v-if="!item.self">
          <img class="msg_avatar" :src="selectedChat.user.img">
          <span class="msg_content">{{item.content}}</span>
        </div>
        <div class="msg_wrap myself" v-if="item.self">
          <span class="msg_content">{{item.content}}</span>
          <img class="msg_avatar" src="../../static/images/user_avatar.jpg">
        </div>
      </div>
    </div>
    <div class="chat_input">
      <div class="tool">
        <i class="iconfont icon-xiaolian"></i>
        <i class="iconfont icon-tupian"></i>
        <i class="iconfont icon-paizhao"></i>
        <i class="iconfont icon-zengjia"></i>
        <i class="icon_right iconfont icon-shezhi"></i>
      </div>
      <textarea class="inputarea" ref="inputarea" v-model="msg" @focus="changebg('true')" @blur="changebg('false')" @keyup.enter="send_msg"></textarea>
      <button class="send_btn" @click="send_msg">发送(s)</button>
      <transition name="fade">
        <div class="nomsg" v-show="warnshow">
          <span>不能发送空白消息</span>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      msg: '',
      warnshow: false
    }
  },
  computed: {
    ...mapGetters(['selectedChat'])
  },
  watch: {
    selectedChat () {
      this.$refs.inputarea.focus()
      this.$nextTick(() => {
        this.$refs.msglist.scrollTop = this.$refs.msglist.scrollHeight - this.$refs.msglist.offsetHeight
      })
    }
  },
  mounted () {
    this.$refs.inputarea.focus()
    this.$nextTick(() => {
      this.$refs.msglist.scrollTop = this.$refs.msglist.scrollHeight - this.$refs.msglist.offsetHeight
      return true
    })
  },
  filters: {
    formatdate (date) {
      let time = new Date()
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
    send_msg () {
      if (!this.msg) {
        this.warnshow = true
        setTimeout(() => {
          this.warnshow = false
        }, 1000)
      } else if (this.selectedChat.id === 3) {
        this.$store.dispatch('sendMessage', this.msg)
        this.$http.post('/api', {
          key: 'af79746f81a541c6885d02eead53ba48',
          info: this.msg
        }).then(res => {
          console.log(res)
          this.$store.dispatch('addMessage', res.data.text)
          this.$nextTick(() => {
            this.$refs.msglist.scrollTop = this.$refs.msglist.scrollHeight - this.$refs.msglist.offsetHeight
          })
        })
        this.msg = ''
      } else {
        this.$store.dispatch('sendMessage', this.msg)
        this.msg = ''
      }
      this.$nextTick(() => {
        this.$refs.msglist.scrollTop = this.$refs.msglist.scrollHeight - this.$refs.msglist.offsetHeight
      })
    },
    changebg (e) {
      if (e === 'true') {
        document.getElementsByClassName('chat_input')[0].style.background = '#fff'
        document.getElementsByClassName('inputarea')[0].style.background = '#fff'
      } else {
        document.getElementsByClassName('chat_input')[0].style.background = '#f5f5f5'
        document.getElementsByClassName('inputarea')[0].style.background = '#f5f5f5'
      }
    }
  }
}
</script>
<style scoped>
#chatdetail {
  position: relative;
  width: 100%;
  height: 100%;
}
.chat_name {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 30px;
  border-bottom: 1px solid #edeae8;
}
.chat_name span {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  font-size: 18px;
}
.chat_name i {
  float: right;
  margin-right: 15px;
  font-size: 25px;
  height: 20px;
  line-height: 20px;
  color: #999;
}
.chat_name i:hover {
  cursor: pointer;
  color: #09bb07;
}
.chat_box {
  width: 100%;
  height: 435px;
  box-sizing: border-box;
  border-bottom: 1px solid #edeae8;
  overflow-y: auto;
}
.chat_box .chat_wrap {
  padding: 5px 30px;
}
.chat_box .chat_wrap .msg_date {
  display: flex;
  justify-content: center;
}
.chat_box .chat_wrap .msg_date span {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 0 8px;
  color: #fff;
  background: #dcdada;
  font-size: 12px;
}
.chat_box .chat_wrap .msg_wrap {
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
}
.myself {
  justify-content: flex-end;
}
.chat_box .chat_wrap .msg_wrap .msg_avatar {
  width: 35px;
  height: 35px;
  border-radius: 3px;
}
.chat_box .chat_wrap .msg_wrap .msg_content {
  position: relative;
  box-sizing: border-box;
  margin-left: 10px;
  padding: 8px 10px;
  font-size: 14px;
  max-width: 290px;
  min-height: 35px;
  line-height: 20px;
  border-radius: 5px;
  background: #fff;
}
.chat_box .chat_wrap .myself .msg_content {
  margin-left: 0;
  margin-right: 10px;
  background: #9eea6a;
}
.chat_box .chat_wrap .msg_wrap .msg_content:before {
  content: '';
  position: absolute;
  top: 12px;
  left: -10px;
  border: 5px solid transparent;
  border-right: 5px solid #fff;
}
.chat_box .chat_wrap .myself .msg_content:before {
  content: '';
  position: absolute;
  top: 12px;
  left: 100%;
  border: 5px solid transparent;
  border-left: 5px solid #9eea6a;
}
.chat_input {
  width: 100%;
  height: 145px;
  box-sizing: border-box;
  padding: 15px 30px;
}
.chat_input .tool {
  font-size: 0px;
}
.chat_input .tool i {
  font-size: 20px;
  color: #999;
  margin-right: 15px;
}
.chat_input .tool .icon_right {
  font-size: 20px;
  float: right;
  margin-right: 0;
  margin-left: 15px;
}
.chat_input .tool i:hover {
  cursor: pointer;
  color: #09bb07;
}
.chat_input .inputarea {
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  padding-top: 10px;
  overflow-y: auto;
  font-size: 14px;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  background: #f5f5f5;
  border: none;
  resize: none;
  outline: none;
}
.chat_input .send_btn {
  float: right;
  width: 68px;
  height: 28px;
  border: 1px solid #edeae8;
  background: #f5f5f5;
  color: #999;
  border-radius: 3px;
  outline: none;
}
.chat_input .send_btn:hover {
  cursor: pointer;
  color: #fff;
  background: #129611;
}
.nomsg {
  position: absolute;
  right: 10px;
  bottom: 40px;
}
.nomsg span {
  position: relative;
  display: inline-block;
  width: 110px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  text-align: center;
  background: #fff;
  border: 1px solid #999;
  border-radius: 3px;
  filter: drop-shadow(1px 1px 1px #999);
}
.nomsg span:before {
  content: '';
  position: absolute;
  top: 30px;
  left: 50px;
  border: 7px solid transparent;
  border-top: 7px solid #fff;
  filter: drop-shadow(0px 1px 1px #000);
}
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.chat_box::-webkit-scrollbar, .inputarea::-webkit-scrollbar {
  position: absolute;
  width: 8px;
}
.chat_box::-webkit-scrollbar-thumb, .inputarea::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #cbc8c6;
}
</style>
