<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <slot>no content</slot>
                </nav>
                <h1>List of Courses</h1>
            </div>
            <div class="col text-right">
                <slot name="button-right"></slot>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col" v-for="course in courses">
            <OneCourse :id="course.id" :title="course.title" :image="course.image" @delete="deleteOneCourse($event)" />
        </div>
    </div>
</template>

<script>
import OneCourse from './OneCourse'
export default {
    components:{
        OneCourse
    },
    data(){
        return {
            courses: [
                {id: 1, title: "Apprendre JAVASCRIPT", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/H9QyEOsSLG05qNb2kC0V"},
                {id: 2, title: "Formation sur Angular", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/nrOHB2iQTIiGe7hHX9O0"},
                {id: 3, title: "LEARN VUEJS 3 ", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/k7Fltx5ITbu9LI6VtgTS"},
                {id: 4, title: "Symfony 4 ", image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/xhOLHK67RWFXYva2FjQs"}
            ]
        }
    },
    methods:{
        deleteOneCourse(id){
            // alert('delete' + id)
            this.courses = this.courses.filter(course => course.id != id)
        }
    }
}
</script>

<style scoped>
    h1{
        color: blueviolet;
    }
</style>