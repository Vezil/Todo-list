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
    }
})