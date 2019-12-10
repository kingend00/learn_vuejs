<template>
    <div>
        <h1> This is Contact page</h1>
        <p>Count is {{count}}</p>
        <button @click="count++">Increment</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            count:0
        }
    },
    deactivated(){          //like un click component
        console.log('this is deactived')
    },
    activated(){            // like click component
        console.log('this is activated');
    },
    created(){
        console.log('this is created');
    }
}

</script>
