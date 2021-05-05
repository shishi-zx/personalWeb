<template>
  <div id="loginWeb" class="clearfix">
    <form id="login_form" @submit.prevent="submitForm" method="post">
  <div class="form-group">
    <label for="exampleInputEmail1">邮箱 （用户名）</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="邮箱" required v-model="email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">请设置密码</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="设置密码" v-model="pwd" minlength="6" required>
  </div>
  <div id="button_container" class="clearfix">
    <button id="submit" type="submit" class="btn btn-default">登录</button>
    <a href="#/" id="btn_exit" class="btn btn-default">返回</a>
  </div>
  没有账号？请点击这里
        <a href="#/register" >注册</a>
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
import {reqLogin} from '../api'
export default {
  data () {
    return {
      errorMsg: '',
      email: "",
      pwd: ""
    }
  },
  methods: {
    async submitForm () {
      const {email,pwd} = this
      //发送Ajax请求登录
      const result = await reqLogin({email,password:pwd})
      if(result.code == -1){
        this.errorMsg = '用户不存在,请检查用户名是否正确'
        setTimeout(() => {
          this.errorMsg = ''
        }, 3000);
      }
      else if(result.code == 2){
        this.errorMsg = '密码错误，好好想想'
        setTimeout(() => {
          this.errorMsg = ''
        }, 3000);
      }else{
        //更新用户状态
        this.$store.dispatch('getUser',result.data)
        this.$router.push("/index/user")
      }
    }
  }
}
</script>

<style>
    #loginWeb{
      height: 100vh;
      background-image: url("../../static/img/index.jpg");
      background-attachment: fixed;
      background-size: cover;
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