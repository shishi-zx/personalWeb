<template>
  <div id="registerWeb" class="clearfix">
    <form id="login_form" @submit.prevent="submitForm" method="post">
  <div class="form-group">
    <label for="exampleInputEmail1">邮箱 （这将作为您的用户名，请确保正确）</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="邮箱" required v-model="email">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">请输入您希望的昵称</label>
    <input type="text" class="form-control" id="exampleInputnickname1" placeholder="不少于两个字" minlength="2" required v-model="nickname">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">请设置密码</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="设置密码" v-model="pwd1" minlength="6" required>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">请确认密码</label>
    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="确认密码" v-model="pwd2" minlength="6" required>
  </div>
  <div id="button_container" class="clearfix">
    <button id="submit" type="submit" class="btn btn-default">Submit</button>
    <a href="#/login" id="btn_exit" class="btn btn-default">返回</a>
  </div>
</form>

<div class="toast" :class="{showMessage:errorMsg}" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="mr-auto">来自站主的亲切问候</strong>
    <small>1 s ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" @click="errorMsg = '' ">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    {{errorMsg}}
  </div>
</div>

  </div>
</template>

<script>
import { reqRegister } from '../api'
export default {
  data () {
    return {
      email: "",
      nickname: "",
      pwd1 :"",
      pwd2 :"",
      errorMsg: ''
    }
  },
  methods: {
    async submitForm () {
      if(this.pwd1 !== this.pwd2){
        alert("两次密码不一致")
        return
      }
      const user = {
        email: this.email,
        nickname: this.nickname,
        password: this.pwd1
      }
      const result = await reqRegister(user)
      if(result.code == -1){
        this.errorMsg = '用户以经存在了'
        setTimeout(() => {
          this.errorMsg = ''
        }, 3000);
      }else{
        this.errorMsg = '注册成功'
      setTimeout(() => {
          this.errorMsg = ''
        }, 3000);
        this.$store.dispatch('getUser',result.data)
        this.$router.push("/index/user")
      }
      
    }
  }
}
</script>

<style>
    #registerWeb{
        height: 100vh;
        background-image: url("../../static/img/index.jpg");
        background-attachment: fixed;
        background-size: cover;
        overflow: hidden;
    }
  #login_form{
    width: 600px;
    padding: 20px;
    background: rgb(231, 99, 231,0.4);
    margin: 150px auto;
    border-radius: 30px;
    box-shadow: 0 0 100px 30px wheat;
  }
  #login_form input{
    background-color: rgb(125, 196, 224,0.5);
  }
  #login_form input:focus{
    background-color: rgb(125, 196, 224);
    color: yellow;
  }
  #button_container{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
  }
  #btn_exit, #submit{
    width: 200px;
    background: rgba(196, 241, 111, 0.5);
    border-radius: 15px;
  }
   #btn_exit:hover, #submit:hover{
    width: 200px;
    background: rgba(214, 68, 124, 0.8);
    box-shadow: 0 0 100px 10px violet;
  }
  #btn_exit{
    right: 0;
  }
  .showMessage{
    height: 100px;
    position: fixed;
    margin: auto auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 1;
  }
  @media (max-width: 900px){
    #login_form{
      width: 90%;
    }
  }
</style>