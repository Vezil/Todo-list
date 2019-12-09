import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

export const store = new Vuex.Store({

    state:{
        todos:[
            // {
            //     'id':1,
            //     'title':'Destroy mr nasty',
            //     'done':false,
            //     'editing':false,
            // },
            // {
            //     'id':2,
            //     'title':'Destroy mr pig',
            //     'done':false,
            //     'editing':false,    
            // },
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
        retrieveTodos(state,todos){
            state.todos = todos
        }
    },
    actions:{
        retrieveTodos(context){
            axios.get('/todos')
            .then(response =>{
                console.log(response.data);
                 context.commit('retrieveTodos',response.data)
                //this.state.todos = response.data
                console.log(response.data);
            })
            .catch(error=>{console.log(error)})
        },
    }
})