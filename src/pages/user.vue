<template>
  <div id="user-vue_container" class="clearfix">
      <div id="user-vue_imgContainer">
        <img :src="'/api/'+user.avatar" alt="">
      </div>
      <div id="user-vue_infoContainer">
        <span class="user-vue_infor"> 昵称：{{user.nickname}}</span>
        <span class="user-vue_infor"> 性别：{{gender}} </span>
        <span class="user-vue_infor"> 注册时间：{{user.created_time}}</span> 
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user : this.$store.state.user,
      gender: '保密',
    }
  }
}
</script>

<style>
  #user-vue_container{
    width: 90%;
    height: 400px;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    /* background: blue; */
  }
  #user-vue_imgContainer{
    height: 300px;
    overflow: hidden;
    margin: 50px 0;
  }
  #user-vue_infoContainer{
    display: flex;
    flex-direction: column;
    margin: 50px 20px;
  }
  #user-vue_imgContainer>img{
    height: 100%;
    border-radius: 50%;
  }
  .user-vue_infor{
    display: block;
    margin: 15px 10px;
    font-size: 24px;
    /* background: brown; */
  }
  @media (max-width: 700px){
    #user-vue_imgContainer{
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    margin: 50px auto;
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  }
</style>