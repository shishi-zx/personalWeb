<template>
  <div id="mainWeb">
      <Header/>
      <BodyCenter/>
  </div>
</template>

<script>
import Header from '../components/Header'
import BodyCenter from '../components/Body'
export default {
  components: {
      Header,
      BodyCenter
  }
}
</script>

<style>
    #mainWeb{
        background-image: url("../../static/img/index.jpg");
        background-repeat: no-repeat;
        background-attachment: fixed;
        /* background-position: center; */
        background-size: cover;
        height: 100%;
        min-height: 100vh;
        perspective: 500px;
    }
</style>