<template>
  <div>
    <router-link :to="`/index/article/${article._id}`" id="Main_container"   class="clearfix" v-for="(article,index) in $store.state.articles" :key="index">
      <div id="avator_container">
        <img :src="'/api'+article.img_url" alt="" id="avator">
      </div>
      <div id="title_container">
        <span id="title">{{article.title}}</span>
      </div>
      <div id="content_container">
        <p id="content">{{article.content_url}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  #Main_container{
    height: 200px;
    display: block;
    margin: 20px auto;
    background-color: rgb(123, 187, 230,0.3);
    border-radius: 15px;
    transition: all 0.5s;
    width: 90%;
    position: relative;
  }
  #Main_container:hover{
    background-color: rgb(123, 187, 230);
    box-shadow: 0 0 10px 10px rgb(123, 187, 230);
    transform: translateZ(20px);
    z-index: 1000;
  }
  #avator_container{
    width: 300px;
    height: 200px;
    position: absolute;
  }
  #title_container{
    height: 50px;
    max-width: 700px;
    padding: 10px;
    position: absolute;
    left: 300px;
  }
  #content_container{
    height: 150px;
    max-width: 600px;
    padding: 10px;
    position: absolute;
    left: 300px;
    top: 50px;
    /* background-color: violet; */
  }
  #avator{
    width: 300px;
    height: 200px;
  }
  #content{
    overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
  }
  @media (max-width: 700px) {
    #Main_container{
      height: 400px;
    }
    #avator_container{
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto
    }
    #title_container{
      width: 300px;
      top: 200px;
      text-align: center;
      left: 0;
      right: 0;
      margin: 0 auto
    }
    #content_container{
      max-width: 300px;
      top: 250px;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }
</style>