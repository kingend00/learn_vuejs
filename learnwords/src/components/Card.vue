<template>
    <div>
        <div class="title">
            <slot name="title"></slot>    
            <!-- slot have value default , it call is slot default -->
            <span style="color:#ccc">
                <slot name= "subtitle"> the Subtitle</slot>
            </span>
        </div>        
        <div class="content">
            <!-- slot unsign is default slot -->
            <slot name="content"></slot>    
        </div>      
    </div>
</template>
<script>
export default {
    props:['cardWords']
}
</script>

<style lang="" scoped>
    div {
        width: 100%;
        border: 1px solid #ccc;
        box-shadow:1px 1px 2px rgba(0, 0, 0, 6);
        padding:30px;
        margin:20px auto;
        text-align: center;
    }
    h2{
        color:red
    }
</style>