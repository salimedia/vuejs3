<template lang="">
    <h1>List of Posts</h1>
    <div v-for="post in posts" :key="post.id">
        <OnePost :post="post" />
    </div>
</template>
<script>
    import {ref} from 'vue'
    import OnePost from '../components/OnePost'
    export default {
        components: {
            OnePost
        },
        setup() {
            const posts = ref([{
                "id": 3,
                "title": "Learn VueJS 3",
                "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum excepturi error, consectetur fuga alias molestias itaque aperiam eveniet odit nam exercitationem minus. Nesciunt et saepe quasi laborum repellat aspernatur."
            }, {
                "id": 4,
                "title": "Learn NodeJS",
                "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum excepturi error, consectetur fuga alias molestias itaque aperiam eveniet odit nam exercitationem minus. Nesciunt et saepe quasi laborum repellat aspernatur."
            }, {
                "title": "Learn SQL Server",
                "content": "Cupiditate architecto minus rerum in est, non laborum tenetur quod consequatur.",
                "id": 11
            }, {
                "title": "Learn Spring Boot",
                "content": "Repellendus. Voluptatem ut rerum eos ullamco in voluptatem, est, eos aut aut ame.",
                "id": 13
            }, {
                "title": "Learn Laravel 8 ",
                "content": "Repellendus. Voluptatem ut rerum eos ullamco in voluptatem, est, eos aut aut ame.\nThis post is updated for Laravel 8 new version.",
                "id": 14
            }, {
                "title": "Php 8 & OOP",
                "content": "Architecto incidunt, et dolores necessitatibus magna molestias quos est cumque m.\nThe best ever course for: php 8 and OOP.",
                "id": 16
            }])

            return {
                posts
            }
        }
    }
</script>
<style lang="">

</style>