<template>
  <div>
      <input type="text" class="todo-input" placeholder="What do you have to do?" v-model="newTodo" @keyup.enter="addTodo">
      <div v-for="todo in todos" :key="todo.id" class="todo-item">
          <div>{{todo.title}}</div>
          <div class="delete-todo">&times</div>

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
      },
      {
          'id':2,
          'title':'Destroy mr pig',
          'done':false,
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

</style>

