<template>
    <div class="login-form page" >
       <h1 class="login-header">Register</h1>
        <form action="" @submit.prevent="register" class="form">
            <div class="form-control">
                <input type="text" name="name" id="name" class="login-input" placeholder="Name" v-model="name">
            </div>
            <div class="form-control">
                <input type="email" name="email" id="email" class="login-input" placeholder="Email" v-model="email">
            </div>
            <div class="form-control">
                <input type="password" name="password" id="password" class="login-input" placeholder="Password" v-model="password">
            </div>
            <div class="form-control">
                <button type="submit" class="btn-submit">Create Account</button>
                

                <div v-if="serverErrors" >
                    <div v-for="(value, key) in serverErrors" :key="key" class="server-errors">
                        {{ value[0] }}
                    </div>              
                </div> 
            </div>          
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            email:'',
            password:'',
            serverErrors: '',
            successMessages: '',
        }
    },
    methods: {
        register(){
              this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                password: this.password,
            })
            .then(response => {    
                this.successMessages='Registered Successfully!'
                this.$router.push({ path:'/login', params: { dataSuccessMessages: this.successMessages } })
                this.$toast.success({
                    title: this.successMessages,
                    message: 'You can login now !'
                })
            })
            .catch(error=>{
                 this.serverErrors = Object.values(error.response.data.errors)
                 this.password=''
            })
        }
    }

}
</script>
