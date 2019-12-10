<template>
   <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
        <div class="class-body">
            <slot></slot>        
        </div>
    </div>
   </div>
</template>

<script>

export default {
  data(){
    return {

    }
  }
}
</script>
<style lang="">
.card-body{
    font-family:cursive;
    font-size: 24px;
    color:#6e6e6e;
}
.item {
    cursor: pointer;
}
.item:hover {
    background-color: #ffe2e2;
}
</style>

