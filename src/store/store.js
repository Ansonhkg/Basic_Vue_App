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
            messageDuration: 1500,
        }
    },
    mutation:{

    },
    actions:{
        getTesting({dispatch, commit}){
            
            Vue.axios.get('http://api.gymconnect.local/api/test/').then((response) => {
                console.log(response)
            }).catch((e) => {
                console.log("Unable to fetch testing data.")
            })
        }
    }
})