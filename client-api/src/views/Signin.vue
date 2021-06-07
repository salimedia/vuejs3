<template lang="">
    <div>
        <h1>Sign In</h1>

        <div class="row">
            <div class="col-md-6 mx-auto">
                <form  @submit.prevent="submit">
                    <fieldset>                       
                        <div class="form-group text-start" >
                            <label for="email" class="form-label mt-4" >Email address</label>
                            <input v-model="user.email" name="email" type="text" class="form-control" id="email" placeholder="Enter email" >
                        </div>
                        <div class="form-group text-start" >
                            <label for="password" class="form-label mt-4 " >Password</label>
                            <input v-model="user.password" name="password" type="password" class="form-control" id="password" placeholder="Password" >
                        </div>
                        <div class="form-group mt-3 text-start" >
                            <button type="submit" class="btn btn-primary" >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions({
                'signin': 'auth/signin'
            }),
            submit(){
                this.signin(this.user).then(() => this.$router.replace({name: 'Dashboard'}))
            }
        },
    }
</script>
<style lang="">

</style>