<template lang="">
    <div>
        <div class="row">
            <div class="col-md-6 mx-auto">
                <form @submit.prevent="persistPost(post)" class="form">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input v-model="post.title" type="text" id="title" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea v-model="post.content" name="content" id="content" cols="30" rows="10" class="form-control"></textarea>
                    </div>

                    <p>
                        {{ post }}
                    </p>

                    <div class="form-group my-2 text-start">
                        <button class="btn btn-success">Add new post</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import {reactive, ref} from 'vue'
    import {useRouter} from 'vue-router'
    import {db} from './../firebase/config'
    export default {
        setup() {
            const post = reactive({
                title: '',
                content: '',
                tags: ['javascript']
            })

            const error = ref(null)
            const router = useRouter()

            // mehods
            const persistPost = async (post) => {
                try {
                    const res = await db.collection('posts').add(post)
                    router.push({name: 'Posts'})
                } catch (err) {
                    error.value = err.message
                }
            }


            return {post, persistPost}
        }

    }
</script>
<style lang="">

</style>