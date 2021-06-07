<template lang="">
    <div class="card border-primary mb-3" style="max-width: 20rem;" wfd-id="72">
        <div @click="show = !show" class="card-header" wfd-id="74">{{ post.title }}</div>
        <div class="card-body" wfd-id="73">
            <h4 class="card-title">{{ post.title }}</h4>
            <p v-if="show" class="card-text">
                {{ extract }}
            </p>
            <span v-for="tag in post.tags" class="badge bg-primary mx-1 text-capitalize" wfd-id="180">
                #{{ tag }}
            </span>

            <div class="my-3">
                <router-link :to="{name: 'show-post', params: {id: post.id} }" class="btn btn-sm btn-info"> Show </router-link>
                <!-- <router-link :to="{name: 'show-post', params: {id: post.id} }" class="btn btn-sm btn-info"> Show </router-link> -->
                <router-link to="#" class="btn btn-sm btn-warning mx-2"> Edit </router-link>
                <button @click="deletePost(post.id)" class="btn btn-sm btn-danger"> Delete </button>
            </div>
        </div>
    </div>
    
</template>
<script>
    import {ref, computed,onMounted, onUpdated,onUnmounted, } from 'vue'
    import {db} from './../firebase/config'
    export default {
        props: ['post'],
        setup(props) {

            //Life Cycle Hooks
            onUnmounted(() => {
                console.log('On Unmounted')
            })

            onMounted(() => {
                console.log('On Post Mounted')
            })

            onUpdated(() => {
                console.log('On Post Updated')
            })

            const id = props.post.id;

            const show = ref(true)
            const error = ref(null)



            const extract = computed(() => props.post.content.substring(0, 50) + '...')

            const deletePost = async(id) => {
                try {
                    const res = await db.collection('posts').doc(id).delete();
                } catch (err) {
                    error.value = err.message
                    console.log(error.value)
                }
            }

            return {
                extract,
                show,
                error,
                deletePost
            }
        }
    }
</script>
<style lang="">

</style>