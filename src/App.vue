<template>
  <div id="app" class="clearfix">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getArticle')
  },
}
</script>

<style>
html{
  height: 100%;
  /* perspective: 500px; */
}
body{
  height: 100%;
}
</style>
