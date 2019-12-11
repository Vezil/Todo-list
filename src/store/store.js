import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const store = new Vuex.Store({

    state:{
        token: localStorage.getItem('access_token') || null,
        todos:[],
    },
    getters:{
        loggedIn(state) {
            return state.token != null
        }
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
        },
        retrieveToken(state,token) {
            state.token = token
        },
        destroyToken(state){
            state.token = null;
        },
        clearTodos(state){
            state.todos = []
        },
    },
    actions:{
        clearTodos(context){
            context.commit('clearTodos')
        },
        register(context,data) {
            return new Promise((resolve,reject) => {
                axios.post('/register',{
                    name: data.name,
                    email: data.email,
                    password: data.password,
                })
                .then(response =>{
                    resolve(response)
                })
                .catch(error=>{
                    reject(error)           
                    })
              })
        },
        destroyToken(context) {

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            if(context.getters.loggedIn) {           
                return new Promise((resolve,reject) => {
                    axios.post('/logout')
                    .then(response =>{
                        localStorage.removeItem('access_token')
                        context.commit('destroyToken')
                        resolve(response)

                    })
                    .catch(error=>{
                        console.log(error)
                        localStorage.removeItem('access_token')
                        context.commit('destroyToken')
                        reject(error)           
                        })
                    })
            }
        },
        retrieveToken(context,credentials) {

        return new Promise((resolve,reject) => {
            axios.post('/login',{
                username: credentials.username,
                password: credentials.password,
            })
            .then(response =>{
                const token = response.data.access_token
                localStorage.setItem('access_token', token)
                context.commit('retrieveToken', token)
                resolve(response)

            })
            .catch(error=>{
                console.log(error)
                 reject(error)
                
                })
            })
        },
        retrieveTodos(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            axios.get('/todos')
            .then(response =>{
                 context.commit('retrieveTodos', response.data)
            })
            .catch(error=>{console.log(error)})
        },
        addTodo(context,todo) {

            axios.post('/todos',{
                title: todo.title,
                done: false,
            })
            .then(response =>{
                 context.commit('addTodo', response.data)
            })
            .catch(error=>{console.log(error)})
        },
        updateTodo(context,todo) {

            axios.patch('/todos/'+ todo.id,{
                title: todo.title,
                done: todo.done,
            })
            .then(response =>{
                 context.commit('updateTodo', response.data)
            })
            .catch(error=>{console.log(error)})
        },
        deleteTodo(context,id) {

            axios.delete('/todos/'+ id)
            .then(response =>{
                 context.commit('deleteTodo', id)
            })
            .catch(error=>{console.log(error)})
        }
    }
})