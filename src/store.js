import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex)

const now = new Date()
const state = {
  searchText: '',
  user: {
    name: 'ratel',
    img: '../assets/user_avatar.jpg'
  },
  // 对话好友列表
  chatlist: [{
    id: 1,
    user: {
      name: '妈咪',
      img: 'static/images/mother.jpg'
    },
    messages: [{
      content: '么么哒，妈咪爱你',
      date: now
    }, {
      content: '按回车可以发送信息，还可以给我发送表情哟。按回车可以发送信息，还可以给我发送表情哟。按回车可以发送信息，还可以给我发送表情哟。按回车可以发送信息，还可以给我发送表情哟。按回车可以发送信息，还可以给我发送表情哟。',
      date: new Date(2016, 0, 11, 5, 45, 45)
    }],
    index: 1
  }, {
    id: 2,
    user: {
      name: 'father',
      img: 'static/images/father.jpg'
    },
    messages: [{
      content: 'Are you kidding me?',
      date: new Date(2017, 0, 11, 5, 45, 45)
    }],
    index: 2
  }, {
    id: 3,
    user: {
      name: '机器人',
      img: 'static/images/vue.jpg'
    },
    messages: [{
      content: '我会跟你聊聊天的哟',
      date: now
    }, {
      content: '阿西吧',
      date: now
    }],
    index: 3
  }],
  friendlist: [{
    id: 0,
    wxid: '',
    initial: '新的朋友',
    img: 'static/images/newfriend.jpg',
    signature: '',
    nickname: '新的朋友',
    sex: 0,
    remark: '新的朋友',
    area: ''
  }, {
    id: 1,
    wxid: 'AmorAres',
    initial: 'A',
    img: 'static/images/小姨妈.jpg',
    signature: '每天我就萌萌哒',
    nickname: 'Amor',
    sex: 0,
    remark: 'Amor',
    area: '浙江 宁波'
  }, {
    id: 2,
    wxid: 'Big-fly',
    initial: 'B',
    img: 'static/images/大飞哥.jpg',
    signature: '你不知道的js',
    nickname: 'fly',
    sex: 1,
    remark: '大飞哥',
    area: '奥地利 布尔根兰'
  }, {
    id: 3,
    wxid: 'microzz ',
    initial: 'D',
    img: 'static/images/microzz.jpg',
    signature: '学习让我快乐让我成长',
    nickname: 'microzz',
    sex: 1,
    remark: '大佬',
    area: '江西 赣州'
  }, {
    id: 4,
    wxid: 'hwn0366',
    initial: 'F',
    img: 'static/images/father.jpg',
    signature: '学习让我快乐让我成长',
    nickname: '丢',
    sex: 1,
    remark: 'father',
    area: '江西 抚州'
  }, {
    id: 5,
    wxid: 'orange66',
    initial: 'J',
    img: 'static/images/orange.jpg',
    signature: '你可以笑的很阳光！',
    nickname: 'orange',
    sex: 1,
    remark: '橘子',
    area: '江西 赣州'
  }, {
    id: 6,
    wxid: 'Seto_L',
    img: 'static/images/加菲猫.jpg',
    signature: '自强不息',
    nickname: '21',
    sex: 1,
    remark: '加菲',
    area: '北京 海淀'
  }, {
    id: 7,
    wxid: 'wxid_itjz73t1ajt722',
    initial: 'M',
    img: 'static/images/mother.jpg',
    signature: '开开心心就好',
    nickname: '娄娄',
    sex: 0,
    remark: '妈咪',
    area: '江西 抚州'
  }, {
    id: 8,
    wxid: 'hj960503',
    img: 'static/images/萌萌俊.jpg',
    signature: '原谅我有点蠢。。',
    nickname: '。。。。。',
    sex: 1,
    remark: '萌萌均',
    area: '江西 萍乡'
  }, {
    id: 9,
    wxid: 'hj960503',
    img: 'static/images/萌萌俊.jpg',
    signature: '原谅我有点蠢。。',
    nickname: '。。。。。',
    sex: 1,
    remark: '萌萌均',
    area: '江西 萍乡'
  }, {
    id: 10,
    wxid: 'hj960503',
    img: 'static/images/萌萌俊.jpg',
    signature: '原谅我有点蠢。。',
    nickname: '。。。。。',
    sex: 1,
    remark: '萌萌均',
    area: '江西 萍乡'
  }, {
    id: 11,
    wxid: 'hj960503',
    img: 'static/images/萌萌俊.jpg',
    signature: '原谅我有点蠢。。',
    nickname: '。。。。。',
    sex: 1,
    remark: '萌萌均',
    area: '江西 萍乡'
  }, {
    id: 12,
    wxid: 'hj960503',
    img: 'static/images/萌萌俊.jpg',
    signature: '原谅我有点蠢。。',
    nickname: '。。。。。',
    sex: 1,
    remark: '萌萌均',
    area: '江西 萍乡'
  }, {
    id: 13,
    wxid: 'hj960503',
    img: 'static/images/萌萌俊.jpg',
    signature: '原谅我有点蠢。。',
    nickname: '。。。。。',
    sex: 1,
    remark: '萌萌均',
    area: '江西 萍乡'
  }],
  selectChatId: 1,
  selectFriendId: 0
}

const mutations = {
  initData (state) {
    let data = localStorage.getItem('vue-chat')
    if (data) {
      state.chatlist = JSON.parse(data)
    }
  },
  search (state, value) {
    state.searchText = value
  },
  selectChat (state, value) {
    state.selectChatId = value
  },
  selectFriend (state, value) {
    state.selectFriendId = value
  },
  sendMessage (state, msg) {
    let result = state.chatlist.find(session => session.id === state.selectChatId)
    result.messages.push({
      content: msg,
      date: new Date(),
      self: true
    })
  },
  addMessage (state, msg) {
    let result = state.chatlist.find(session => session.id === state.selectChatId)
    result.messages.push({
      content: msg,
      date: new Date(),
      self: false
    })
  },
  send (state) {
    let result = state.friendlist.find(friend => friend.id === state.selectFriendId)
    let msg = state.chatlist.find(msg => msg.user.name === result.remark)
    if (!msg) {
      state.selectId = 1
      for (let i = 0; i < state.chatlist.length; i++) {
        state.chatlist[i].id++
        state.chatlist[i].index++
      }
      state.chatlist.unshift({
        id: 1,
        user: {
          name: result.remark,
          img: result.img
        },
        messages: [{
          content: '已经置顶聊天，可以给我发信息啦！',
          date: new Date()
        }],
        index: 1
      })
    } else {
      state.selectChatId = msg.index
      router.push({ path: '/chat' })
    }
  }
}
const getters = {
  searchedChatlist (state) {
    let sessions = state.chatlist.filter(sessions => sessions.user.name.includes(state.searchText))
    return sessions
  },
  searchedFriendlist (state) {
    let friends = state.friendlist.filter(friends => friends.remark.includes(state.searchText))
    return friends
  },
  selectedChat (state) {
    let session = state.chatlist.find(session => session.id === state.selectChatId)
    return session
  },
  selectedFriend (state) {
    let friend = state.friendlist.find(friend => friend.id === state.selectFriendId)
    return friend
  },
  messages (state) {
    let session = state.chatlist.find(session => session.id === state.selectId)
    return session.messages
  }
}

const actions = {
  search: ({ commit }, value) => commit('search', value),
  selectChat: ({ commit }, value) => commit('selectChat', value),
  selectFriend: ({ commit }, value) => commit('selectFriend', value),
  sendMessage: ({ commit }, msg) => commit('sendMessage', msg),
  addMessage: ({ commit }, msg) => commit('addMessage', msg),
  send: ({ commit }) => commit('send'),
  initData: ({ commit }) => commit('initData')
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

store.watch(
  (state) => state.chatlist,
  (val) => {
    localStorage.setItem('vue-chat', JSON.stringify(val))
  }, {
    deep: true
  }
)
export default store
