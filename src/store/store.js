import Vue from 'vue'
import Vuex from 'vuex'
import Router from '../router'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        /* Site Configuration */
        API_ENDPOINT : '',
        PAGE_PREFIX : 'GymConnect - ',
        status:{
            currentPage : '',
            isAuth : false,
            pageLoading: false,
            loginWaiting: false,
            hasError: null,
            isSuccess: null,
            messages: [],
            messageDuration: 2000,
        }
    },
    mutations:{
        addMessages: (state, message) => {
            state.status.messages.push(message)
        },
        clearMessages: (state) => {
            state.status.messages = []
        }
    },
    actions:{
        /**
        * Description: Asynchonize all actions in actions array
        * Type: General
        * Note:        Function type must be 'async' and returns Promise
        * Usage:     dispatch(['actionA', 'actionB']) 
        **/
       async asyncActions({dispatch, commit}, actions){
            for(var index in actions)
                await dispatch(actions[index])
        },

        /**
        * Description: Handle Responses
        * Type: General
        **/
        responseHandler : ({dispatch, commit}, [response, successMessage, errorMessage]) => {

            if(response.status === undefined || response.status != 200){
                commit('addMessages', errorMessage)
            }else{
                commit('addMessages', successMessage)
            }
            
            setTimeout(function(){
                commit('clearMessages')
            }, store.state.status.messageDuration)
        },

        /**
        * Description: A sample of a GET request using responseHandler
        * Request: GET
        **/
        async getSample({dispatch, commit}){
            
            return new Promise((resolve, reject) => {
                Vue.axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
                    resolve(response)
                }).catch((e) => {
                    reject()
                })
            }).then((response) => {
                dispatch('responseHandler', [
                    response,
                    "Successfully fetched testing data.",
                    "Unable to fetch testing data"
                ])
            })
        }
    }
})