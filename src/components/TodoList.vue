<template>
  <div class="page">
      <div class="hello-container">
                Welcome, {{ name }} this is your Todo list. Do your best !
      </div>
    <input type="text" class="todo-input" placeholder="What do you have to do?" v-model="newTodo" @keyup.enter="addTodo">

    <transition-group name="fade" enter-active-class="animated fadeIn" leave-active-class="animated flipOutX" >
        <todo-item v-for="(todo,index) in this.$store.state.todos" :key="todo.id" :todo="todo" 
        :index="index">                  
       </todo-item>
    </transition-group>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  name: 'TodoList',
  components:{
      TodoItem,
  },

  data() {
    return {
      newTodo: '',
      idForTodo: 3,
      name:'',
      
    }
  },
  created() {
      this.$store.dispatch('retrieveTodos') 
      this.$store.dispatch('retrieveName') 
      .then(response => {
          this.name = response.data.name
      })
  },  
   methods:{
      addTodo() {
          if(this.newTodo.trim() == 0){
              return
          }
          this.$store.dispatch('addTodo',{
              id: this.idForTodo,
              title: this.newTodo,
          })
      
          this.newTodo=''
          this.idForTodo++
      }, 
  }
}

</script>


<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css");

    .todo-input{

        width:100%;
        padding: 10px 18px;
        margin-bottom: 16px;
        text-shadow: 1px 1px #0a1f18;
     
    }
    .todo-item{

        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .delete-todo{
        cursor: pointer;
        margin-left: 14px;
    }
    .delete-todo:hover{
        color:red;
    }

    .todo-item-edit{
        display: flex;
        margin-left:12px;
        width:100%;
        padding:10px;
        border: 1px solid #ccc;
    }
    .todo-item-label{
        padding: 10px;
        border: 1px solid rgb(12, 58, 12);
        margin-left: 12px;
    }
    .todo-item-left{

        display:flex;
        align-items: center;
    }
     .todo-input::placeholder{
        color:rgb(78, 235, 247);
    }
    .completed{
        text-decoration: line-through;
        color: gray;
        opacity:0.2;
        transition: 1s;
    }
    .hello-container{
        margin-bottom: 20px;
        color:rgb(235, 240, 230);
    }

</style>

