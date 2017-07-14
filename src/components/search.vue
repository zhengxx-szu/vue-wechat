<template>
  <div id="search">
    <input type="text" class="search_input" v-model='text' @keyup='search(text)'>
    <button class="search_btn"><i class="iconfont icon-sousuoxiao"></i></button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions(['search'])
  }
}
</script>
<style scoped>
#search {
  width: 100%;
  height: 60px;
  display: flex;
}
.search_input {
  width: 190px;
  height: 23px;
  margin-top: 20px;
  margin-left: 15px;
  padding-left: 5px;
  display: inline-block;
  border: 1px solid #d9d7d6;
  border-right: 0;
  outline:none;
  background: #e5e5e5;
}
.search_input:focus {
  background: #f2efee;
}
.search_btn {
  height: 25px;
  margin-top: 20px;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  border: 1px solid #d9d7d6;
  background: #e5e5e5;
  cursor: pointer;
}
.iconfont {
  font-size: 14px;
}
</style>
