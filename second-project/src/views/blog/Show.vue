<template lang="">
    <div>
        <div v-if="post" class="card border-primary mb-3" wfd-id="72">
            <div class="card-header" wfd-id="74">
                {{ post.title }}
            </div>
            <div class="card-body" wfd-id="73">
                <h4 class="card-title">{{ post.title }}</h4>
                <p class="card-text"> {{ post.content }}</p>
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
    export default {
        props: ['id', 'slug'],
        data() {
            return {
                post: null
            }
        },
        mounted() {
            fetch('http://localhost:3000/posts/' + this.id)
            .then(res => res.json())
            .then(data => this.post = data)
            .catch(err => console.log(err))
        }
    }
</script>
<style lang="">

</style>