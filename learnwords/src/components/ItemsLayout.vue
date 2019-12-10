<template>
   <div class="row">
      <app-items v-for="(item,key) in items" :key="key" @click.native="removeItem(key)">{{ item }}</app-items>
   </div>
</template>

<script>

import items from "../components/Items.vue"
export default {
  props:['items'],
  components:{
      appItems : items
  },
  data(){
    return {

    }
  },
  methods:{
    removeItem(index){
      this.$emit('deleteItem',index)
    }
  }
}
</script>
<style lang="">

</style>

