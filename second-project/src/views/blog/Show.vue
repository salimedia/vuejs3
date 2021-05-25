<template lang="">
    <div>
        <h1>Show Post</h1>
        <h2>id: {{ id }}</h2>
        <h2>slug is: {{ slug }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum excepturi error, consectetur fuga alias molestias itaque aperiam eveniet odit nam exercitationem minus. Nesciunt et saepe quasi laborum repellat aspernatur.</p>
    </div>
</template>
<script>
    export default {
        props: ['id', 'slug'],
        data() {
            return {

            }
        }
    }
</script>
<style lang="">

</style>