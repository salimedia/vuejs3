<template>
  <div class="home text-center">
    <img alt="Vue logo" class="" src="../assets/logo.png">
  </div>
  <div class="my-3">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
