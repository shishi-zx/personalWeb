<template>
  <div id="Header_bar" class="clearfix">
      <div id="Header">
        <div id="left_bar">
            <a href="#/" class="headtext clearfix">礻礻</a>
        </div>
        <div id="right_bar">
            <div class="link2">
                <router-link to="/index/article"  class="headtext clearfix">关于我</router-link>
                <router-link :to="loginLink" class="headtext clearfix">{{isLogin}}</router-link>
            </div>
            <div class="lines"  @click.stop="showMenu">
                <div class="line1" ref="line1" :class="{rotatey1: isRotatey}"></div>
                <div class="line2" ref="line2" :class="{rotatey2: isRotatey}"></div>
                <div class="line3" ref="line3" :class="{rotatey3: isRotatey}"></div>
            </div>
        </div>
        <div class="links clearfix" :class="{show: isRotatey}">
            <router-link to="/index/article"  class="clearfix">关于我</router-link>
            <router-link :to="loginLink" class=" clearfix">{{isLogin}}</router-link>
        </div>
      </div>  
  </div>
</template>

<script>
export default {
  data () {
    return {
      isRotatey: false,
      isLogin: '登录',
      loginLink: '/login'
    }
  },
  methods: {
    showMenu () {
      this.isRotatey = !this.isRotatey
    }
  },
  mounted () {
      if(this.$store.state.user.email)
      {
          this.isLogin = '用户中心'
          this.loginLink = '/index/user'
      }
      var html = document.querySelector("html")
      html.addEventListener("click",() => {
          this.isRotatey = false
      })
  }
}
</script>

<style>
    #Header_bar{
        height: 40px;
        width: 100%;
        background: rgb(115, 160, 226,0.2);
        position: relative;
    }
    #Header_bar:hover{
        box-shadow:1px 1px 10px 10px rgb(139, 89, 197);
        background: rgb(139, 89, 197,0.6);
    }
    #Header{
        height: 100%;
        width: 1000px;
        /* background: rgb(198, 110, 241,0.2); */
        margin: auto;
        left:0;
        right: 0;
        position: absolute;
    }
    #left_bar,#right_bar{
        /* background: cyan; */
        position: absolute;
        height: 100%;
        /* width: 100px; */
    }
    .headtext{
        /* background: darkmagenta; */
        float: left;
        line-height: 30px;
        height: 30px;
        padding: 0 5px;
        margin-top: 5px;
        color:whitesmoke
    }
   #right_bar{
       right: 0;
       display: flex;
   }
   #left_bar{
       left: 0;
   }
.lines{
    width: 20px;
    display: none;
    margin: auto 10px;
}
.line1{
    margin-top: 5px;
    width: 20px;
    border-top: 1px solid black;
}
.line2{
    margin-top: 5px;
    width: 20px;
    border-top: 1px solid black;
}
.line3{
    margin-top: 5px;
    width: 20px;
    border-top: 1px solid black;
}
.lines>div{
    transition: all 1s;
     transform-origin: 0 0;
}

.links{
    height: 0px;
    position: relative;
    background: rgb(235, 205, 194,0.5);
    top: 40px;
    transition: all 1s;
    overflow: hidden;
     z-index: 5000;
}
.links>a{
    display: block;
    padding: 5px 10px;
    color:white;
}
.links>a:hover{
    background: rgba(236, 102, 185, 0.4);
}
   @media (max-width: 1000px){
        #Header{
        width: 100%;
        background: rgba(197, 155, 38, 0.2);
    }
   }
   @media (max-width: 700px){
    .headtext{
        color: black;
    }
    .links>a{
    display: block;
    padding: 5px 10px;
    color:black;
}
    .lines{
        display: block;
    }
    .link2{
        display: none;
    }
    .rotatey1{
        transform: rotateZ(37deg);
    }
    .rotatey2{
        opacity: 0;
    }
    .rotatey3{
        transform: rotateZ(-37deg);
    }
    .show{
        height: 70px;
        transition: all 0.8s;
        box-shadow: 0 10px 10px palevioletred;
    }
}
</style>