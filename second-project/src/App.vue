<template>
  <div id="nav">
    <NavBar></NavBar>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  export default {
    components: {
      NavBar
    }
}
</script>

<style>


</style>
