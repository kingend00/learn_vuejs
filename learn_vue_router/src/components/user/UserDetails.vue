<template>
    <div>
        <h1>This is Admin profile</h1>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        <p>Id Profile {{ $route.params.id }}</p>
        
        <p>Id Profile123 {{ query }}</p>
        <router-link :to="id+'/child'">Child User Details</router-link>
        <router-view class="route-view"></router-view>
    </div>
</template>

<script>
export default {
    props:['query','id'], // param id like id param on url
    watch :{
        '$route'(to,from){
            this.id = to.params.id  // xử lý :Hash mode của vue router , khi id trên url thay đổi thì id sẽ thay đổi theo 
                                    
        }
    }
}
</script>

<style lang="" scoped>
.route-view {
    color:red;
}
</style>