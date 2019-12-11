<template>
    <div class="login-form page" >
        <h1 class="login-header">Login</h1>
        <form action="" @submit.prevent="login" class="form">
            
            <div class="form-control">
                <input type="email" name="username" class="login-input" placeholder="Email" v-model="username" >
            </div>
            <div class="form-control">
                <input type="password" name="password" class="login-input" placeholder="Password" v-model="password">
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
