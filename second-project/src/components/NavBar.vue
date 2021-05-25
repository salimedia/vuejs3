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
                    <form class="d-flex" wfd-id="450">
                        <input class="form-control me-sm-2" type="text" placeholder="Search" wfd-id="514">
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit" wfd-id="649">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scope>
    .router-link-active{
        font-weight: bold;
    }
</style>