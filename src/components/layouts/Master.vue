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
  background-color: #567781;
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
    border-bottom: 1px solid rgb(179, 180, 171);
    margin-bottom: 24px;
    background: rgb(155, 156, 148);

}
.nav a {
    color:#0b5fcc;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
    background: rgb(155, 156, 148);
}
li{
    background: rgb(155, 156, 148);
}
.yourtodo a{
    color:#09276b;
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
    animation-duration:0.2s;
}

.spinner{
    position:absolute;
    right:50%;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 12px;
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

</style>