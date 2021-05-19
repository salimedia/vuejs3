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
    <Courses>
      <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
      <template v-slot:button-right>
        <button class="btn btn-sm btn-success">New</button>
      </template>
    </Courses>
  </div>

  <Footer url="http://brightcoding.dev" title="Bright Coding Certfs" text="Check your certificat here"  />
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
