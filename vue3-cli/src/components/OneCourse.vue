<template lang="">
    <div>
        <div class="card my-3" style="width:18rem;">
            <img :src="course.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ course.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button class="mx-1 btn btn-sm btn-danger" @click="deleteOne(id)" >Delete</button>
                <button class="mx-1 btn btn-sm btn-secondary" >{{ course.category }}</button>
                <hr>
                <p class="mt-1">
                    <span class="badge rounded-pill bg-primary mx-1" v-for="tag in course.tags">{{ tag }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['course'],
        methods: {
            deleteOne(id) {
                this.$emit('delete', id)
            }
        }
    }
</script>
<style lang="">

</style>