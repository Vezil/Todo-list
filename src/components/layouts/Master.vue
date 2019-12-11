<template>
    <div id="app">
        <ul class="nav">
            <li><router-link to="/">Home</router-link></li>
            <li class="yourtodo"><router-link to="/todos">Todos</router-link></li>
            <li v-if="!loggedIn"><router-link to="/login">Login</router-link></li>
            <li v-if="!loggedIn"><router-link to="/register">Register</router-link></li>        
            <li v-if="loggedIn"><router-link to="/logout">Logout</router-link></li>        
        </ul>
      <transition name="router-animation" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in"> 
            <router-view></router-view>
      </transition>
    </div>
</template>
<script>
export default {
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn
        }
    }
}
</script>
<style>

@import url('cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css');
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css");

*{
  box-sizing:border-box;
  padding: 0;
  margin:0;
  font-size: 24px;
  /* background-color: #567781; */
  background:url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/dark_wall.png);

  color:aquamarine;
}
.container{
    margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100vh;
}
.flex-center{
    display: flex;
    justify-content: center;
}
.nav{
    display: flex;
    list-style: none;
    padding: 15px 0;
    margin: 0;
    justify-content: flex-end;
    border-bottom: 1px solid rgb(98, 99, 90);
    margin-bottom: 24px;
    /* background: rgb(155, 156, 148); */
    background: #444857;
    color:#e3e4e8;
    

}
.nav a {
    color:#0b5fcc;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
    background: #444857;
    color:#cccdd3;
}
li{
    background: #444857;
}
.yourtodo a{
    color:#a2a3a5;
}
.server-errors{
    margin-top: 14px;
    font-size: 10px;
    padding: 10px 16px;
    color:#a94442;
    background: #F3DEDE;
    border-radius: 4px;
}
.success-messages{
    background-color: #dff0d8;
    color: #3c763d;
    margin-top: 14px;
    font-size: 10px;
    padding: 10px 16px;
    border-radius: 4px;
}
.page{
    animation-duration:0.2s !important;
}

.spinner{
    position: fixed;
    left:48%;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 80px;
  text-align: center;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;

  /* right: 8px; */
  width: 16px;
  height: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

.btn-submit:disabled{
    cursor:not-allowed;
}

.login-header{

  text-align: center;
  padding:30px 0px 0px 0px;
  font:25px Oswald;
  color:#FFF;
  text-transform:uppercase;
  text-shadow:#000 0px 1px 5px;

 
}
.form{
    margin-top: 10px;
    width:420px;
    
}
input[type="email"],input[type="password"],input[type="text"]{

  outline:none;
  border:none;

  width:98%;
  padding:15px 0px 15px 8px;
  border-radius:5px;
  box-shadow:inset 4px 6px 10px -4px rgba(0,0,0,0.3), 0 1px 1px -1px rgba(255,255,255,0.3);
	background:rgba(0,0,0,0.2);
  border:1px solid rgba(0,0,0,1);
  margin-bottom:10px;
  color:#6E6E6E;
  text-shadow:#000 0px 1px 5px;
}

button[type="submit"]{

   outline:none;
   border:none;

  width:100%;
  padding:15px;
  border-radius:5px;
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#28D2DE), to(#1A878F));
  background-image: -webkit-linear-gradient(#28D2DE 0%, #1A878F 100%);
  background-image: -moz-linear-gradient(#28D2DE 0%, #1A878F 100%);
  background-image: -o-linear-gradient(#28D2DE 0%, #1A878F 100%);
  background-image: linear-gradient(#28D2DE 0%, #1A878F 100%);
  font:14px Oswald;
  color:#FFF;
  text-transform:uppercase;
  text-shadow:#000 0px 1px 5px;
  border:1px solid #000;
  opacity:0.7;
	-webkit-box-shadow: 0 8px 6px -6px rgba(0,0,0,0.7);
  -moz-box-shadow: 0 8px 6px -6px rgba(0,0,0,0.7);
	box-shadow: 0 8px 6px -6px rgba(0,0,0,0.7);
  border-top:1px solid rgba(255,255,255,0.8)!important;
}

button[type="submit"]:hover{
  opacity:1;
  cursor:pointer;
}
.input:focus{
  box-shadow:inset 4px 6px 10px -4px rgba(0,0,0,0.7), 0 1px 1px -1px rgba(255,255,255,0.3);
  background:rgba(0,0,0,0.3) !important;
}

.form{
   margin:auto;
   margin-top:18px;
}



@media(max-width:800px) {
  
  .nav{
       width:100vw;
  }
  .nav li{
       /* width:25%; */
       
  }
  .form{
    width:80vw;
  }
    .nav a{
       font-size:10px
       
  }
  .spinner{
    position: fixed;
    left:40%;
}
}



</style>