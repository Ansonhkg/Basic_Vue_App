<template>
<div>
    <h3>Sign in</h3>
    <hr>
    <label for="Email">Email</label>
    <input type="text" placeholder="Email" v-model="loginForm.email">
    <label for="Email">Password</label>
    <input type="text" placeholder="Password" v-model="loginForm.password">
    <hr>
    <button>Sign In</button>
</div>
</template>

<script>
export default {
    data(){
        return{
            loginForm: {
                email: 'admin@admin.com',
                password: 'admin'
            }
        }
    },
    created(){
        this.$store.dispatch('getSample')
    }
}
</script>
