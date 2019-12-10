<template>
   <div class="row">
       <div class="col-sm-12">
           <h3>Item Added</h3>
           <div class="progress">
               <div class="progress-bar bg-success" :style="{width:(itemCount / maxItems) * 100 +'%'}">

               </div>
               {{itemCount}} / {{maxItems}}
           </div>
       </div>
   </div>
</template>

<script>

export default {
  props:['itemCount','maxItems'],
  data(){
    return {

    }
  }
}
</script>
<style lang="">

</style>

