<template lang="">
    <div class="p-3 border border-3 rounded-2">
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
                    <!-- <option :value="myCat.id" v-for="myCat in categories">{{ mycat.name }}</option> -->
                  </select>
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

        <p>Title: {{ title }}</p>
        <p>Image: {{ image }}</p>
        <p>Category: {{ category }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "My Title",
                image: "Image URL",
                categories: [
                    {id: 1, name: 'FrontEnd'},
                    {id: 2, name: 'BackEnd'},
                    {id: 3, name: 'FullStack'},
                ],
                category: '',
            }
        },
        methods: {
            newCourse() {
                let title = this.$refs.title.value;
                let image = this.$refs.image.value;

                if (title == "" || image == "") {
                    return;
                }

                const course = {
                    title,
                    image
                }

                this.$emit('add', course)

                this.$refs.title.value = ""
                this.$refs.image.value = ""
            }
        }
    }
</script>

<style>

</style>