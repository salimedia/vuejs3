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
                    <strong class="me-auto my1">New Post</strong>
                    <small>Vue JS 3 + JSON server</small>
                    <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close" wfd-id="518">
                        <span aria-hidden="true" wfd-id="19"></span>
                    </button>
                </div>
                <div class="toast-body" wfd-id="17">
                    <form @submit.prevent="createPost">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input v-model="title" type="text" class="form-control" id="title">
                        </div>
                        <div class="form-group">
                            <label for="content">Content</label>
                            <textarea v-model="content" name="content" id="content" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                        <div class="form-group my-2 d-grid gap-2">
                            <button class="btn btn-md btn-success">Add</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            createPost(){
                let post = {
                    title: this.title,
                    content: this.content
                }
                fetch('http://localhost:3000/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Application/json',
                    },
                    body: JSON.stringify(post)
                })
                .then(data => this.$router.push('/blog'))
                .catch(err => console.log(err.message))
                
            }
        },
    }
</script>
<style scope>
    .toast {
        min-width: 700px;
    }
</style>