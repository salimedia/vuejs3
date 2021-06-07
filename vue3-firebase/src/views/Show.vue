<template lang="">
    <div v-if="post" >
        <div v-if="error"  class="row">
            <div class="col-md-6 mx-auto">
                <div class="alert alert-danger" role="alert">
                    {{ error }}
                </div>
            </div>
        </div>

        <h1>{{ post.title }}</h1>
        <p>
            {{ post.content }}
        </p>
        <div class="my3">
            <span v-for="(tag, index) in post.tags" :key="index" class="badge bg-primary mx-1 text-capitalize" >
                #{{ tag }}
            </span>

            <button @click="deletePost(post.id)" class="btn btn-sm btn-danger">Delete</button>
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
</template>
<script>
import {useRoute, useRouter} from 'vue-router'
import { db } from './../firebase/config'
import getOnePost from './../composables/posts/getOnePost'
import { ref } from 'vue'

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const {post,error,load} = getOnePost();
        const id = route.params.id;

        load(id);

        const deletePost = async (id) => {
            try {
                const res = await db.collection('posts').doc(id).delete();
                router.push({name: 'Posts'})
            } catch (err) {
                error.value = err.message
            }
        }

        return {
            post,
            error,
            deletePost
        }
    }
}
</script>
<style lang="">

</style>