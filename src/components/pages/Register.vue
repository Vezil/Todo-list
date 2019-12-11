<template>
    <div class="login-form flex-center page" >
        <h2 class="login-header">Register</h2>
        <form action="" @submit.prevent="register">
            <div class="form-control">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="login-input" v-model="name">
            </div>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="login-input" v-model="email">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="login-input" v-model="password">
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
                 //console.log(Object.values(error.response.data.errors));
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