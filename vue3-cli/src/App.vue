<template>
  <Header />
  <div class="container ">
    <div class="row">
      <div class="col mx-auto text-center">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>{{ message }}</h1>
        <AddCourse />
        
      </div>
    </div>
    <Courses />
  </div>

  <Footer />
</template>

<script>

import Header from './components/Header';
import AddCourse from './components/AddCourse';
import Courses from './components/Courses';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    AddCourse,
    Courses,
    Footer
  },
  data(){
    return {
      message:  "Bright Coding"
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value)
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    }
  }
}
</script>

<style>
  .container{
    margin: 60px;;
  }
</style>
