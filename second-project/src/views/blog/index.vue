<template lang="">
    <div class="container">
        <div class="row">
            <h1></h1>
            <div class="card border-primary mb-3" v-for="post in posts" style="max-width: 20rem;" wfd-id="72">
                <div class="card-header" wfd-id="74">
                    
                    <router-link :to="{name: 'post-show', params: {id: post.id, slug: post.slug}}">{{ post.title }}</router-link>
                </div>
                <div class="card-body" wfd-id="73">
                    <h4 class="card-title">{{ post.title }}</h4>
                    <p class="card-text"> {{ post.content }}</p>
                </div>
            </div>
              
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                posts: [{
                    id: 1,
                    title: 'Learn Angular',
                    slug: 'learn-angular',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum excepturi error, consectetur fuga alias molestias itaque aperiam eveniet odit nam exercitationem minus. Nesciunt et saepe quasi laborum repellat aspernatur.'
                }, {
                    id: 2,
                    title: 'Learn Laravel 8',
                    slug: 'learn-laravel-8',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum excepturi error, consectetur fuga alias molestias itaque aperiam eveniet odit nam exercitationem minus. Nesciunt et saepe quasi laborum repellat aspernatur.'
                }, {
                    id: 3,
                    title: 'Learn VueJS',
                    slug: 'learn-vuejs',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum excepturi error, consectetur fuga alias molestias itaque aperiam eveniet odit nam exercitationem minus. Nesciunt et saepe quasi laborum repellat aspernatur.'
                }, {
                    id: 4,
                    title: 'Learn NodeJS',
                    slug: 'learn-nodejs',
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum excepturi error, consectetur fuga alias molestias itaque aperiam eveniet odit nam exercitationem minus. Nesciunt et saepe quasi laborum repellat aspernatur.'
                }, ]
            }
        }
    }
</script>
<style lang="">

</style>