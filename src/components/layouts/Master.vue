<template>
    <div id="app">
        <ul class="nav">
            <li><router-link to="/">Home</router-link></li>
            <li class="yourtodo"><router-link to="/todos">Todos</router-link></li>
            <li v-if="!loggedIn"><router-link to="/login">Login</router-link></li>
            <li v-if="!loggedIn"><router-link to="/register">Register</router-link></li>        
            <li v-if="loggedIn"><router-link to="/logout">Logout</router-link></li>        
        </ul>
     <router-view></router-view>
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

</style>