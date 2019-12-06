<template>
  <div>
      <input type="text" class="todo-input" placeholder="What do you have to do?" v-model="newTodo" @keyup.enter="addTodo">
      <div v-for="(todo,index) in todos" :key="todo.id" class="todo-item">

              <div class="todo-item-left">
                  <div v-if="!todo.editing" class="todo-item-label" @dblclick="editTodo(todo)"><b>{{todo.title}}</b></div>
              <input type="text" class="todo-item-edit" v-else v-model="todo.title" @blur="editDone(todo)" @keyup.enter="editDone(todo)">
          </div>

          <div class="delete-todo" @click="removeTodo(index)">&times</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',

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
      editTodo(todo){
          todo.editing=true
      },
      editDone(todo){

            todo.editing = false
      },

      removeTodo(index){
          this.todos.splice(index,1)

      }
  }
}
</script>


<style>
    .todo-input{

        width:100%;
        padding: 10px 18px;
        margin-bottom: 16px;
     
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

</style>

