<template>
    <div>
        <h1>This is Admin profile</h1>
        <p>Id Profile {{ id }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id :this.$route.params.id
        }
    },
    watch :{
        '$route'(to,from){
            this.id = to.params.id  // xử lý :Hash mode của vue router , khi id trên url thay đổi thì id sẽ thay đổi theo 
                                    
        }
    }
}
</script>

<style lang="">
    
</style>