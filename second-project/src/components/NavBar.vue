<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
            <div class="container-fluid" wfd-id="448">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" wfd-id="650">
                    <span class="navbar-toggler-icon" wfd-id="459"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01" wfd-id="449">
                    <ul class="navbar-nav me-auto" wfd-id="451">
                        <li class="nav-item" wfd-id="457">
                            <router-link class="nav-link" :to="{name: 'Home' }">Home
                                <span class="visually-hidden" wfd-id="458">(current)</span>
                            </router-link>
                        </li>
                        <li class="nav-item" wfd-id="456">
                            <router-link class="nav-link" :to="{name: 'Blog' }">Blog</router-link>
                        </li>
                        <li class="nav-item" wfd-id="455">
                            <router-link class="nav-link" :to="{name: 'About' }">About</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="my-3 mx-auto">
            <button @click="Redirect" class="btn btn-success mx-1"><i class="fa fa-home"></i> Home</button>
            <button @click="Previous" class="btn btn-danger mx-1">Previous</button>
            <button @click="Next" class="btn btn-info mx-1">Next</button>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            Previous(){
                this.$router.go(-1)
            },
            Next(){
                this.$router.go(1)
            },
            Redirect(){
                this.$router.push('/')
            },
        },
    }
</script>
<style scope>
    .router-link-active {
        font-weight: bold;
    }
</style>