<template>
    <div class="login-form flex-center page" >
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
                <button type="submit" class="btn-submit" :disabled="loading">
                    <div class="spinner"  v-if="loading"><div class="lds-facebook"><div></div><div></div><div></div></div>  </div> Login</button>
                <div v-if="serverErrors" class="server-errors">{{serverErrors}} </div>  
                <div v-if="successMessages" class="success-messages">{{ successMessages }}</div>
            </div>    
                
        </form>
    </div>
</template>
<script>
export default {
    name: 'login',
    props: {
        dataSuccessMessages: {
            type: String,
        }
    },
    data() {
        return {
            username: '',
            password: '',
            serverErrors:'',
            successMessages: this.dataSuccessMessages,
            loading:false,
        }
    },
    methods: {
        login(){
            this.loading=true,
            this.$store.dispatch('retrieveToken', {
                username: this.username,
                password: this.password,
            })
            .then(response => {
                this.loading=false
                this.$router.push({ path:'/todos' })
            })
            .catch(error=>{
                 this.loading=false
                 this.serverErrors = 'Your credentials are incorrect. Please try again. Details: ['+error.response.data.message+']'
                 this.password=''
                 this.successMessages = ''
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