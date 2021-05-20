<template lang="">
    <div class="p-3 border border-3 rounded-2">
        <div class="mb-3 row">
            <label for="title" class="col-sm-4 col-form-label">Title</label>
            <div class="col-sm-7">
                <input ref="title" type="text" class="form-control" id="title">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="url" class="col-sm-4 col-form-label">Image URL</label>
            <div class="col-sm-7">
                <input ref="image" type="text" class="form-control" id="url">
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
    </div>
</template>

<script>
export default {
    methods: {
        newCourse(){
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