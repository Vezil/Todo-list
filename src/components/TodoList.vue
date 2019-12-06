<template>
  <div>
    <input type="text" class="todo-input" placeholder="What do you have to do?" v-model="newTodo" @keyup.enter="addTodo">

    <transition-group name="fade" enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
        <todo-item v-for="(todo,index) in todos" :key="todo.id" :todo="todo" @removedTodo="removeTodo" @finishEdit="finishEdit"
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

  data () {
    return {
      newTodo: '',
      idForTodo: 3,
      todos:[
      {
          'id':1,
          'title':'Destroy mr nasty',
          'done':false,
          'editing':false,
      },
      {
          'id':2,
          'title':'Destroy mr pig',
          'done':false,
          'editing':false,    
      }
      ]
    }
  },

  methods:{
      addTodo() {
          if(this.newTodo.trim() == 0){
              return
          }
          this.todos.push({
              id: this.idForTodo,
              title: this.newTodo,
              done:false,
          })
      
          this.newTodo=''
          this.idForTodo++
      },

      removeTodo(index){
          this.todos.splice(index,1)

      },
      finishEdit(data){

          this.todos.splice(data.index,1,data.todo)
      }
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

</style>

