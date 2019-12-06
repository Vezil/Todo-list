<template>
  <div>
      <input type="text" class="todo-input" placeholder="What do you have to do?" v-model="newTodo" @keyup.enter="addTodo">

      <transition-group name="fade" enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
      <div v-for="(todo,index) in todos" :key="todo.id" class="todo-item">

              <div class="todo-item-left">
                  <input type="checkbox" class="todo-checkbox" v-model="todo.done"/>

                  <div v-if="!todo.editing" class="todo-item-label" :class="{completed: todo.done}" @dblclick="editTodo(todo)"><b>{{todo.title}}</b></div>
              <input type="text" class="todo-item-edit" v-else v-model="todo.title" @blur="editDone(todo)"
               @keyup.enter="editDone(todo)" @keyup.esc="editCancel(todo)" v-focus>
          </div>

          <div class="delete-todo" @click="removeTodo(index)">&times</div>
    
     </div>
    </transition-group>
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

//fixing issue from focus
  directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
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
          this.titleEditCashe=todo.title
          todo.editing=true
      },
      editDone(todo){
        if(todo.title.trim() == 0){
              todo.title = this.titleEditCashe
          }
            todo.editing = false
      },
      editCancel(todo){
            todo.title = this.titleEditCashe
            todo.editing = false
      },

      removeTodo(index){
          this.todos.splice(index,1)

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

