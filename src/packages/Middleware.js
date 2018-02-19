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

        /**
        * Description: Response Interceptor
        * Must use `axios` in main.js
        **/
        responseInterceptor : (axios) => {
            axios.interceptors.response.use((response) => {
                return response
            }, (error) => {
                var status = error.response.status
                console.log(status)
            })
        },

        /**
        * Description: Resolve routes for every new request
        * Must use `router` in main.js
        **/
        routeResolver: (router) => {
            router.beforeEach((to, from, next) => {
                console.log("Calling route resolver.")
                next()
            })
        }

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