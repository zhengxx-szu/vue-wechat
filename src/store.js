import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex)

const now = new Date()
const state = {
  searchText: '',
  user: {
    name: 'zheng',
    img: '../assets/user_avatar.jpg'
  },
  chatlist: [{
    id: 1,
    user: {
      name: '大娃',
      img: 'static/images/one.jpg'
    },
    messages: [{
      content: '你好！我是大娃！',
      date: now
    }, {
      content: '我的弱点是：比较鲁莽，不知随机应变！',
      date: new Date(2016, 0, 11, 5, 45, 45)
    }],
    index: 1
  }, {
    id: 2,
    user: {
      name: '二娃',
      img: 'static/images/two.jpg'
    },
    messages: [{
      content: '你好！我是二娃！',
      date: now
    }, {
      content: '我的弱点是：攻击力与其兄弟相比较过于弱小了，眼睛和耳朵太脆弱！',
      date: new Date(2016, 0, 11, 5, 45, 45)
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
    wxid: 'dawa',
    initial: 'D',
    img: 'static/images/one.jpg',
    signature: '力大无穷，巨大化。',
    nickname: '大娃',
    sex: 0,
    remark: '红娃',
    area: '浙江 宁波'
  }, {
    id: 2,
    wxid: 'erwa',
    initial: 'E',
    img: 'static/images/two.jpg',
    signature: '千里眼，顺风耳，灵活聪明，机敏过人，最善于谋划计策。',
    nickname: '二娃',
    sex: 1,
    remark: '橙娃',
    area: '广东 汕头'
  }, {
    id: 3,
    wxid: 'sanwa ',
    initial: 'S',
    img: 'static/images/three.jpg',
    signature: '铜头铁臂，钢筋铁骨，刀枪不入。',
    nickname: '三娃',
    sex: 0,
    remark: '黄娃',
    area: '福建 福州'
  }, {
    id: 4,
    wxid: 'siwa',
    initial: 'S',
    img: 'static/images/four.jpg',
    signature: '喷火，吸火，霹雳。',
    nickname: '四娃',
    sex: 1,
    remark: '绿娃',
    area: '广东 深圳'
  }, {
    id: 5,
    wxid: 'wuwa',
    initial: 'W',
    img: 'static/images/five.jpg',
    signature: '吸水，吐水，口吐闪电产生降雨。',
    nickname: '五娃',
    sex: 0,
    remark: '青娃',
    area: '广东 肇庆'
  }, {
    id: 6,
    wxid: 'liuwa',
    initial: 'L',
    img: 'static/images/six.jpg',
    signature: '隐身术，透体术，来无影去无踪，聪明机灵，最善于偷盗和行动。',
    nickname: '六娃',
    sex: 1,
    remark: '蓝娃',
    area: '海南 海口'
  }, {
    id: 7,
    wxid: 'qiwa',
    initial: 'Q',
    img: 'static/images/seven.jpg',
    signature: '最小，没多大本领，倍受哥哥们的关爱，有宝葫芦。',
    nickname: '七娃',
    sex: 0,
    remark: '紫娃',
    area: '辽宁 沈阳'
  }, {
    id: 8,
    wxid: 'yeye',
    img: 'static/images/grandpa.jpg',
    signature: '葫芦娃的爷爷。',
    nickname: '爷爷',
    sex: 1,
    remark: '老头儿',
    area: '湖南 长沙'
  }],
  selectChatId: 1,
  selectFriendId: 0
}

const mutations = {
  initData (state) {
    let data = localStorage.getItem('vue-wechat')
    if (data) {
      state.chatlist = JSON.parse(data)
    }
  },
  search (state, value) {
    state.searchText = value
  },
  selectChat (state, value) {
    state.selectChatId = value
    console.log(state.selectChatId)
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
    }
    router.push({ path: '/chat' })
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
    localStorage.setItem('vue-wechat', JSON.stringify(val))
  }, {
    deep: true
  }
)
export default store
