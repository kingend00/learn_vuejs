<template>
 <div id="app">
    <div class="col-sx-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-left">
      <h1 class="text-center"> Vue Resource</h1>
      <hr>
      <div class="form-group">
        <input type="text" class="form-control" v-model="user.username">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="user.email">
      </div>
      <button type="submit" @click.prevent="submit" class="btn btn-block btn-success">
        Submit
      </button>
      <br>
      <button type="submit" class="btn btn-warning" @click="getallData">
        Get all data
      </button>
       <button type="submit" class="btn btn-danger" @click="getUser">
        Get data user
      </button>
      <br>
      <ul class="list-group">
        <li class="list-group-item" v-for="(item,index) in users" :key="index">
          {{item.email}} - {{item.username}}
        </li>
      </ul>
    </div>
    <br>
    <br>
    <input type="text" class="form-control" v-model="node"> 
  </div>
</template>

<script>


export default {
  data(){
    return {
      user:{
        username:"",
        email:''
      },
      users:[],
      resource :{},
      node:''
    }
  },
  created(){
    const customActions = {
      createItem:{method:'POST',url:'https://learn-vue-resource-1.firebaseio.com/user.json'},
      getNodeData:{method:"GET",url:'https://learn-vue-resource-1.firebaseio.com'}
    }
    this.resource = this.$resource('https://learn-vue-resource-1.firebaseio.com/data.json',{},customActions)
  },
  methods:{
    submit(){
      // this.$http.post('https://learn-vue-resource-1.firebaseio.com',this.user)
      // .then(response => {
      //   console.log(response);
      // },error => {
      //   console.log(error);
      // })
      this.resource.createItem({},this.user)
    },
    getallData(){
      this.$http.get('https://learn-vue-resource-1.firebaseio.com/data.json')
      .then(response => {
          console.log(response.body);
          this.users = response.body; 
      },error => {
        console.log(error);
      })
    },
    getUser(){
      this.resource.getNodeData({node:this.node})
      .then(response => {
          console.log(response.body);
          this.users = response.body; 
      },error => {
        console.log(error);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
