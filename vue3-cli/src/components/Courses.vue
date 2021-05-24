<template>
    <div class="container text-center">
        <div class="row" v-if="showForm">
            <div class="col-md-6 mx-auto">
                <AddCourse @add="AddCourse($event)" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <slot>no content</slot>
                </nav>
                <h1>List of Courses</h1>
            </div>
            <div class="col text-right">
                <button 
                    @click="displayForm" 
                    class="btn btn-sm btn-success"
                    :class=" {'btn-success' : !showForm, 'btn-dark' : showForm} "
                    >
                    {{ showForm ? 'Close' : 'New'}}
                </button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col" v-for="course in courses">
            <OneCourse 
                :id="course.id" 
                :title="course.title" 
                :image="course.image" 
                @delete="deleteOneCourse($event)" 
            />
        </div>
    </div>

    <teleport to="#alert" v-if="courseAdded">
        <div class="alert alert-success text-center" role="alert">
            Course was Added Successfully!
        </div>
    </teleport>

    <teleport to="#alert" v-if="courseDeleted">
        <div class="alert alert-danger text-center" role="alert">
            Course was deleted!
        </div>
    </teleport>

    
</template>

<script>
import AddCourse from './AddCourse';
import OneCourse from './OneCourse'
export default {
    components:{
        AddCourse,
        OneCourse
    },
    data(){
        return {
            showForm: false,
            courseAdded: false,
            courseDeleted: false,            
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
            this.courseDeleted = true
            setTimeout(() => {
                this.courseDeleted = false
            }, 1500);
        },
        AddCourse(course){
            this.courses.unshift(course)
            this.showForm = false;
            this.courseAdded = true
            setTimeout(() => {
                this.courseAdded = false
            }, 1500);
        },
        displayForm(){
            this.showForm = !this.showForm
        }
    }
}
</script>

<style scoped>
    h1{
        color: blueviolet;
    }
</style>