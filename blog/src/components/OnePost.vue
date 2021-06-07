<template lang="">
    <div>
        <h2 @click="show = !show" >{{ post.title }}</h2>
        <p v-if="show">{{ extract }}</p>  
    </div>
</template>
<script>
import { ref,computed, onMounted, onUpdated, onUnmounted,  } from 'vue'
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


        const show = ref(true)


        const extract = computed(() => props.post.content.substring(0,50) + '...' )

        return {extract, show}
    }
}
</script>
<style lang="">
    
</style>