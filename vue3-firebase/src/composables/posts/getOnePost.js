import { ref } from 'vue'
import { db } from '../../firebase/config'

const loadPost = () => {
    const post = ref({})
    const error = ref(null)
    const load = async(id) => {

        try {
            const res = await db.collection('posts').doc(id).get();

            if (!res.exists) {
                throw Error('This post dosnt exist');
            }

            post.value = {...res.data(), id }
        } catch (err) {
            error.value = err.message
        }
    }

    return { post, error, load }
}

export default loadPost;