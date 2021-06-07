<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/blog">Posts</router-link>
  </div>

  <div>
    <button @click="previous">Previous </button>
    <button @click="next">Next </button>
    <button @click="redirect" >Redirect </button>
  </div>
  <router-view/>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {

    const router = useRouter();
    //Methods
    const previous = () => {
      router.go(-1)
    }

    const next = () => {
      router.go(1)
    }

    const redirect = () => {
      router.push('/')
    }

    return {previous, next, redirect}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
