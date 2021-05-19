<template>
    <div class="container text-center">
        <h1>List of Courses</h1>
    </div>
    <div class="row">
        <div class="col" v-for="course in courses">
            <div class="card my-3" style="width:18rem;">
              <img :src="course.image" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ course.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                b5
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            courses: [
                {id: 1, title: "Apprendre JAVASCRIPT MODERNE", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/H9QyEOsSLG05qNb2kC0V"},
                {id: 2, title: "Formation sur Angular", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/nrOHB2iQTIiGe7hHX9O0"},
                {id: 3, title: "LEARN VUEJS 3 ", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/k7Fltx5ITbu9LI6VtgTS"},
                {id: 4, title: "Symfony 4 avec API Plateform", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/xhOLHK67RWFXYva2FjQs"}
            ]
        }
    }
}
</script>

<style scoped>
    h1{
        color: blueviolet;
    }
</style>