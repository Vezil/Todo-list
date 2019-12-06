<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <TodoList/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TodoList
  }
}
</script>

<style>

*{
  box-sizing:border-box;
}
.container{
    max-width:600px;
    margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

</style>