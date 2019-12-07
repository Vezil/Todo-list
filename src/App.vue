<template>
  <div id="app" class="container">
    
    <HelloWorld/>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>

*{
  box-sizing:border-box;
  font-size: 24px;
  background-color: #567781;
  color:aquamarine;
}
.container{
    max-width:600px;
    margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>