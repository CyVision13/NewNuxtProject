
import Vuex from 'vuex'
import axios from   'axios'

const createStore = ()=>{
    return new Vuex.Store({
        state:{
            loadedPosts:[]
        },
        mutations: {
            setPosts(state,posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext,context){
                return axios.get('https://vuejs-f4c7c.firebaseio.com/posts.json')
                    .then(res =>{
                        const postsArray = []
                        for(const key in res.data){
                            postsArray.push({...res.data[key],id:key})
                        }
                        vuexContext.commit('setPosts',postsArray)
                    })
                    .catch(e=> console.log(e))
            },
            setPosts(vuexContext,posts){
                vuexContext.commit('setPosts',posts)

            }
        },getters:{
            loadedPosts(state){
                return state.loadedPosts
            }
        }
    })
}

export default createStore