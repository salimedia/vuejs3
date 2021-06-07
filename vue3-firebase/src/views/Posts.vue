<template lang="">
    <div class="container">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>List of Posts</h1>
        <div v-if="posts.length" class="row">
            <div class="col-md-4 my-3" v-for="post in posts" :key="post.id">
                <OnePost :post="post" />
            </div>
        </div>
        <div v-else class="row">
            <div class="col-md-6 mx-auto">
                <div class="text-center my-5" >
                    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue'
    import OnePost from '../components/OnePost'
    import loadPosts from './../composables/posts/getPosts'
    export default {
        components: {
            OnePost
        },
        setup() {
            const {
                posts,
                error,
                load
            } = loadPosts();

            load();

            return {
                posts
            }
        }
    }
</script>
<style lang="">

</style>