import Vue from 'vue'
import Vuex from 'vuex'
import Router from '../router'
import {messageModule} from '../packages/Middleware'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        message: messageModule
    },
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
        }
    },
    mutations:{

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

                Vue.middleware.responseHandler({commit}, [
                    response,
                    "Successfully fetched testing data.",
                    "Unable to fetch testing data"
                ])
            })
        }
    }
})