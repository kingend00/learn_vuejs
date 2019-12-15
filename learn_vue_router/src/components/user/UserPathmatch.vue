<template>
    <div>
        <h1>User Path match</h1>
        <h3>This is data from url Path match : {{pathMatch}}</h3>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pathMatch:''
        }
    },
    created(){
        this.pathMatch = this.$route.params.pathMatch
    }
}
</script>