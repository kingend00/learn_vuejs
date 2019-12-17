<template>
    <div id="app">
      <h1>This is User component</h1> 
      <button class="btn btn-danger" @click="backHome">
          Back go to Home
      </button>
      <button class="btn btn-success" @click="goDetails">
          Back go to Admin profile
      </button>
       <button class="btn btn-warning" @click="goProfile">
          Back go to AUser profile
      </button>
    </div>
</template>

<script>
export default {
    methods:{
        backHome(){
            this.$router.push('/')
        },
        goDetails(){
            this.$router.push('/user/1')
        },
        goProfile(){
            this.$router.push('/user/100')
        }
    }
}
</script>

<style lang="">
    
</style>