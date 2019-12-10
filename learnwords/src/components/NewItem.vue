<template>
  <div class="row">
      <form action="">
          <div class="col-sm-8 col-sm-offsetr-2 col-md-6 col-md-offset-3 form-group">
              <label for="">U can saying...</label>
              <textarea name="" id="" cols="30" rows="10" v-model="item"></textarea>
          </div>

          <div class="col-sm-8 col-sm-offsetr-2 col-md-6 col-md-offset-3 form-group">
              <button class="btn btn-success" @click.prevent="createNew">
                  Add
              </button>
              
          </div>
      </form>
  </div>
</template>

<script>


export default {
    props:['items'],
    data(){
        return {
            item:''
        }
    },
    methods:{
        createNew(){
            if(this.item == '')
                return false;
            if(this.items.includes(this.item)) // check value exists in array
                 return alert('value does exists');

            this.$emit('itemAdded',this.item);
            this.item=''
        }
    }
}
</script>
<style lang="">

</style>

