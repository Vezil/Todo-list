<template>
<div class="todo-item">
    <div class="todo-item-left">
        <input type="checkbox" class="todo-checkbox" v-model="done"/>
        <div v-if="!editing" class="todo-item-label" :class="{completed: done}" @dblclick="editTodo"><b>{{title}}</b></div>
        <input type="text" class="todo-item-edit" v-else v-model="title" @blur="editDone"
        @keyup.enter="editDone" @keyup.esc="editCancel" v-focus>
    </div>
    <div class="delete-todo" @click="removeTodo(index)">&times</div>
</div>
</template>

<script>
export default {
    name: 'todo-item',
    props:{
        todo:{
            type:Object,
            required:true,
        },
        index:{
            type:Number,
            required:true,
        },
    },
    data(){
        return{
            'id':this.todo.id,
            'title': this.todo.title,
            'done': this.todo.done,
            'editing': this.todo.editing,
            'titleEditCashe': ''
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
    methods: {
        removeTodo(index){
            eventBus.$emit('removedTodo', index)
        },
      editTodo(){
          this.titleEditCashe=this.title
          this.editing=true
      },
      editDone(){
        if(this.title.trim() == 0){
              this.title = this.titleEditCashe
          }
            this.editing = false
            eventBus.$emit('finishEdit', {
                'index':this.index,
                'todo':{

                    'id':this.id,
                    'title': this.title,
                    'done': this.done,
                    'editing': this.editing
                }
            })
      },
      editCancel(){
            this.title = this.titleEditCashe
            this.editing = false
      },


    }
}
</script>