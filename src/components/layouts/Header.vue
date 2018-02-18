<template>
    <div>
        <router-link to="/login" v-if="!isAuth">
            <a>Login</a>
        </router-link>
        <hr>
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
