<template lang="">
    <div class="row">
        <div class="col-md-6"> </div>
        <div class="col-md-6 text-right text-end">
            <router-link  :to="{name:'Blog'}" class="btn btn-success ">Back to posts list</router-link>
        </div>
    </div>
    <div class="row my-4">
        <div class="">
            <h1 class="my1"></h1>
            <div class="toast show col-md-6 mx-auto" role="alert" aria-live="assertive" aria-atomic="true" wfd-id="16">
                <div class="toast-header" wfd-id="18">
                    <strong class="me-auto my1">Edit Post</strong>
                    <small>Vue JS 3 + JSON server</small>
                    <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close" wfd-id="518">
                        <span aria-hidden="true" wfd-id="19"></span>
                    </button>
                </div>
                <div class="toast-body" wfd-id="17">
                    <form @submit.prevent="editPost" >
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input v-model="post.title" type="text" class="form-control" id="title">
                        </div>
                        <div class="form-group">
                            <label for="content">Content</label>
                            <textarea v-model="post.content" name="content" id="content" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                        <div class="form-group my-2 d-grid gap-2">
                            <button class="btn btn-md btn-warning">Edit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            url: 'http://localhost:3000/posts/' + this.id, 
            post: {
                    title: '',
                    content: ''
                }
        }
    },
    mounted() {
        fetch(this.url)
        .then(res => res.json())
        .then(data => this.post = data)
        .catch(err => console.log(err))
    },
    methods: {
        editPost(){
            if(this.post.title == '' || this.post.content == '') {
                return;
            }
            fetch(this.url, {
                method: 'PUT',
                headers: {'content-Type': 'application/json'},
                body: JSON.stringify(this.post)
            })
            .then(res => res.json())
            .then(data => this.$router.push('/blog'))
            .catch(err => console.log(err))

        }
    },
}
</script>
<style lang="">
    
</style>