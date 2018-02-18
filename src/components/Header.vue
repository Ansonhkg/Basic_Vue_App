<template>
    <div>
        <h1>src/components/Header.vue</h1>
        <hr>
        <router-link to="/login" v-if="!isAuth">
            <a>Login</a>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isActive: true
        }
    },
    computed:{
        isAuth(){
            return false
        }
    }
}
</script>
