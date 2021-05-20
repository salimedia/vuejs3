<template>
  <Header />
  <div class="container" style="">
    <Courses>
      <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </Courses>
  </div>

  <Footer 
    url="http://brightcoding.dev" 
    title="Bright Coding Certfs" 
    text="Check your certificat here" 
  />
</template>

<script>

import Header from './components/Header';
import Courses from './components/Courses';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
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
    },
  }
}
</script>

<style>
</style>
