import {store} from '../store/store'

export const messageModule = {
    state:{
        messages: [],
        messageDuration: 2000,
    },
    mutations:{
        addMessages: (state, message) => {
            state.messages.push(message)
        },
        clearMessages: (state) => {
            state.messages = []
        },
        setMessageDuration: (state, duration) => {
            state.messageDuration = duration
        }
    },
}

export default function (Vue) {

    Vue.middleware = {
        
        /**
        * Description: Handle Promises Responses
        **/
       responseHandler : ({commit}, [response, successMessage, errorMessage]) => {

        if(response.status === undefined || response.status != 200){
            commit('addMessages', errorMessage)
        }else{
            commit('addMessages', successMessage)
        }

        setTimeout(function(){
            commit('clearMessages')
        }, store.state.messageModule.messageDuration)
    },

    }

    // Define a property, $middleware (Sort of like export)
    Object.defineProperties(Vue.prototype, {
        $middleware: {
            get:() => {
                return Vue.middleware
            }
        },

    })
}