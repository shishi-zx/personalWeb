<template>
  <div class="clearfix" id="Center" >
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#Center{      
  margin: 0 auto;
  margin-top:200px;
  margin-bottom: 50px;
  background: rgb(245, 160, 174,0.5);
  max-width: 1000px;
  border-radius: 30px;
  transition: all 0.5s;
}
#Center:hover{
  box-shadow: 0 0 50px 10px rgb(245, 160, 174);
}
</style>