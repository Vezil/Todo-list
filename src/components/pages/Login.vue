<template>
    <div class="login-form flex-center" >
        <h2 class="login-header">Login</h2>
        <form action="" @submit.prevent="login">
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" name="username" class="login-input" v-model="username">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" name="password" class="login-input" v-model="password">
            </div>
            <div class="form-control">
                <button type="submit" class="btn-submit">Login</button>
            </div>          
        </form>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login(){
            this.$store.dispatch('retrieveToken', {
                username: this.username,
                password: this.password,
            })
            .then(response => {
                this.$router.push({ path:'/todos' })
            })
        }
    }
}
</script>
<style>
.form-control{
    margin:10%;
}
</style>