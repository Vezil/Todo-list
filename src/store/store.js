import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state:{
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
            },
        ]
    },
    mutations:{
        addTodo(state,todo){
            state.todos.push({
                id: todo.id,
                title: todo.title,
                done: false,
            })
        },
        deleteTodo(state,id){
            const index = state.todos.findIndex(item =>item.id ==id);
            state.todos.splice(index,1);
        },
        updateTodo(state,todo){

            const index = state.todos.findIndex(item =>item.id ==todo.id);
            state.todos.splice(index,1,{

                'id':todo.id,
                'title': todo.title,
                'done': todo.done,
                'editing': todo.editing
        })

        },
    }
})