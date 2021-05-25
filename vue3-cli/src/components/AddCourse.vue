<template lang="">
    <div class="p-3 border border-3 rounded-2">
        <form @submit.prevent="newCourse()">
            <div class="mb-3 row">
                <label for="title" class="col-sm-4 col-form-label">Title</label>
                <div class="col-sm-7">
                    <input v-model="title" type="text" class="form-control" id="title">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="url" class="col-sm-4 col-form-label">Image URL</label>
                <div class="col-sm-7">
                    <input v-model="image" type="text" class="form-control" id="url">
                </div>
            </div>
    
            <div class="mb-3 row">
                <div class="col-sm-4">
                    <label for="category">Category</label>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                      <select v-model="category" class="form-control" name="category" id="category">
                        <option :value="myCategory.id" v-for="myCategory in categories">{{ myCategory.name }}</option>
                      </select>
                    </div>
                </div>
            </div>
    
            <div class="mb-3 row">
                <div class="col-sm-4">
                    <label for="">Type Of Payment</label>
                </div>
                <div class="col-sm-4">
                    <div class="form-check form-check-inline">
                        <input v-model="typeOfPayment" class="form-check-input" type="radio" name="typeOfPayment" id="free" value="free">
                        <label class="form-check-label" for="free">FREE</label>
                    </div>
    
                    <div class="form-check form-check-inline">
                        <input v-model="typeOfPayment" class="form-check-input" type="radio" name="typeOfPayment" id="paying" value="paying">
                        <label class="form-check-label" for="paying">PAYING</label>
                    </div>
                </div>
            </div>
    
            <div class="mb-3 row">
                <div class="col-sm-4">
                    <label for=""></label>
                </div>
                <div class="col-sm-4 text-left">
                    <div class="form-check form-check-inline">
                        <input v-model="published" class="form-check-input" type="checkbox" id="published" >
                        <label class="form-check-label" for="published">Published</label>
                    </div>
                </div>
            </div>
    
    
            <div class="my-3 row">
                <div class="col-sm-4">
                    <label for="">Tags</label>
                </div>
                <div class="col-sm-4 text-left">
                    <div class="form-check" v-for="tag in tags">
                        <input class="form-check-input" type="checkbox" :value="tag" v-model="myTags" >
                        <label class="form-check-label" >
                            {{ tag }}
                        </label>
                    </div>
                </div>
            </div>
    
            <div class="mb-3 row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <div class="d-grid gap-2">
                        <button @click="newCourse" class="btn btn-warning">Add Course</button>
                    </div>
                </div>
            </div>
        </form>

        <!-- <p>Title: {{ title }}</p>
        <p>Image: {{ image }}</p>
        <p>Category: {{ category }}</p>
        <p>type Of Payment: {{ typeOfPayment }}</p>
        <p>Published: {{ published }}</p>
        <p>my Tags: {{ myTags }}</p> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "My Title",
                image: "Image URL",
                categories: [{
                    id: 1,
                    name: 'FrontEnd'
                }, {
                    id: 2,
                    name: 'BackEnd'
                }, {
                    id: 3,
                    name: 'FullStack'
                }, {
                    id: 4,
                    name: 'Mobile'
                }, ],
                category: 3,
                typeOfPayment: 'paying',
                published: false,
                tags: ['framwok', 'frontend', 'backend', 'javascript'],
                myTags: []
            }
        },
        methods: {
            newCourse() {
                let title = this.title;
                let image = this.image;
                
                let tags = this.tags

                if (title == "" || image == "") {
                    return;
                }

                const course = {
                    title,
                    image,
                    // category: this.categories[this.category - 1].name,
                    category: this.categories.find(cat => cat.id == this.category).name,
                    tags: this.myTags
                }

                this.$emit('add', course)

                this.title = ""
                this.image = ""
            }
        }
    }
</script>

<style>

</style>