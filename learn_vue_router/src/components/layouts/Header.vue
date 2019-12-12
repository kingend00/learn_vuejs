<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
                    <router-link tag="li" :to="'/'" class="nav-item" active-class="active" exact>
                    <a href="" class="nav-link">Home</a></router-link>

                    <router-link tag="a" :to="'/user'" class="nav-item" active-class="active" exact>
                    <a href="" class="nav-link">User</a></router-link>

                    <router-link tag="a" :to="'/user/1'" class="nav-item" active-class="active" exact>
                    <a href="" class="nav-link">Admin profile</a></router-link>

                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="">
    
</style>