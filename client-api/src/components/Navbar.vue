<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid" wfd-id="448">
                <router-link :to="{name: 'Home'}">Home</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" wfd-id="650">
                    <span class="navbar-toggler-icon" wfd-id="459"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01" wfd-id="449">
                    <ul class="navbar-nav me-auto" wfd-id="451">
                        <li v-if="authenticated" class="nav-item active">
                            <router-link class="nav-link" :to="{name: 'Dashboard'}">Dashboard </router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li v-if="!authenticated" class="nav-item active">
                            <router-link class="nav-link" :to="{name: 'Signin'}">Signin </router-link>
                        </li>

                        <li v-if="authenticated" class="nav-item ">
                            <a class="nav-link" href="#">{{ user.name }} </a>
                        </li>
                        <li v-if="authenticated" class="nav-item ">
                            <a @click="logOut()" class="nav-link" href="#">LogOut </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                'authenticated': 'auth/authenticated',
                'user': 'auth/user'
            })
            
        },
        methods: {
            ...mapActions({
                'SignOut': 'auth/SignOut'
            }),
            logOut(){
                this.SignOut().then(() => this.$router.replace({name: 'Home'}))
            }
        },
    }
</script>
<style scoped>
    a {
        color: #a8d9e5;
        text-decoration: none;
    }
</style>