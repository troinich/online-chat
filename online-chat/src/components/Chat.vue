<template>
    <div class="chat container">
        <h2>Chat {{this.name}} </h2>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    //prop that we accept from welcome
    props:['name'],

    data(){
        return{

        }
    }
}
</script>
<style>

</style>
