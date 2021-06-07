<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="text-info">Posts counter: {{ posts.length }}</h2>
            </div>
            <div class="col-md-6 text-right text-end">
                <router-link  to="/new" class="btn btn-success ">Add New Post</router-link>
            </div>
        </div>
        
        <div v-if="posts.length" class="row">
            <div class="card border-primary col-md-12 my-3 px-0" v-for="post in posts" wfd-id="72">
                <OnePost :post="post" @delete="handelDelete" />
            </div>
        </div>
        <div v-else class="text-center my-3" >
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>
<script>
    import OnePost from '../blog/OnePost.vue'
    export default {
        components: {
            OnePost
        },
        data() {
            return {
                posts: {}
            }
        },
        mounted() {
            fetch('http://localhost:3000/posts')
                .then(res => res.json())
                .then(data => this.posts = data)
                .catch(err => console.log(err))
        },
        methods: {
            handelDelete(id) {
                this.posts = this.posts.filter(post => post.id !== id);
            }
        }
    }
</script>
<style lang="">

</style>