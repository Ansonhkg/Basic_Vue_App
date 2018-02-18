<template>
<div class="Content__Container overflow-hidden">
    <div class="Content">
        <h1>PAGE NOT FOUND!</h1>
        <hr>
        <h2>Sorry, but we couldn't find this page!</h2>
        <a @click="back()" class="blue-green" id="back">Back to last page in <b>{{counter}}</b> seconds ...</a>
    </div>
</div>
</template>
<script>

export default {
/* eslint-disable */
    data(){
        return{
            counter: 5
        }
    },
    created(){
        var countDown = setInterval(() => {
            this.counter--
            if(this.counter <= 0){
                clearInterval(countDown)
                this.back()
            }   
        }, 1000)
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
    }
}
</script>

<style>
    .Content{
        text-align: center;
    }
    #back{
        cursor: pointer;
    }
    #back:hover{
        text-decoration: underline;
    }
</style>
