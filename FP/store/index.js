
import Vuex from 'vuex'

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
                return new Promise((resolve,reject)=>{
                    setTimeout(()=> {
                        vuexContext.commit('setPosts', [
                                {
                                id:"1",
                                title:"first post",
                                previewText:"this is our first post!",
                                thumbnail:"https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg"
                                },
                                {
                                id:"2",
                                title:"Second post",
                                previewText:"this is our Second post!",
                                thumbnail:"https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg"
                                },
                                {
                                id:"3",
                                title:"Third post",
                                previewText:"this is our Third post!",
                                thumbnail:"https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg"
                                }
                            ] 
                            )
                        resolve ()
                        
                        },1500)
                    });
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