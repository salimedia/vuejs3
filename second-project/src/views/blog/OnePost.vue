<template lang="">
    <div>
        <div @click="toggle = !toggle" class="card-header" wfd-id="74">
            {{ post.title }}
        </div>
        <div class="card-body" wfd-id="73">
            <p v-if="toggle" class="card-text"> {{ post.content }}</p>
        </div>
        <div class="card-footer">
            <router-link :to="{name: 'post-show', params: {id: post.id, slug: post.slug}}" class="btn btn-info">Show  </router-link>
            <router-link :to="{name: 'Edit', params: {id: post.id}}" class="btn btn-warning mx-2">Edit</router-link>
            <button @click="DeletePost" class="btn btn-dark">Delete</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['post'],
    data() {
        return {
            toggle: true,
            url: `http://localhost:3000/posts/${this.post.id}`
        }
    },
    methods: {
        DeletePost(){
            fetch(this.url, {method: 'DELETE'})
            .then(res => this.$emit('delete', this.post.id))
            .catch(err => console.log(err.message));
        }
    },
}
</script>
<style lang="">
    
</style>