
import axios from 'axios'
import Vuex from 'vuex'

const createStore = ()=>{
    return new Vuex.Store({
        state:{
            loadedPosts:[]
        },
        mutations: {
            setPosts(state,posts) {
                state.loadedPosts = posts
            },
            addPost(state,post){
                state.loadedPosts.push(post)
            },
            editPost(state,editPost){
                const postIndex = state.loadedPosts.findIndex(post =>post.id === editPost)
                state.loadedPosts[postIndex] = editPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context){
            return axios.get('https://vuejs-f4c7c.firebaseio.com/posts.json')
                .then(res =>{
                    const postsArray = []
                    for(const key in res.data){
                        postsArray.push({...res.data[key],id:key})
                    }
                    vuexContext.commit('setPosts',postsArray)
                })
                .catch(err =>console.log(err))
                    
            },
            setPosts(vuexContext,posts){
                vuexContext.commit('setPosts',posts)

            },
            addPost(vuexContext,postData){
                const createdPost = {...postData ,updatedDate: new Date()}
                return axios.post('https://vuejs-f4c7c.firebaseio.com/posts.json',
                    createdPost
                )
                .then(result=>{
                    vuexContext.commit('addPost',{...createdPost,id:result.data.name})
                    
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            editPost(vuexContext,editedPost){
                return axios.put('https://vuejs-f4c7c.firebaseio.com/posts/' 
                +editedPost.id +'.json',
                editedPost)
                .then(res=>{
                    vuexContext.commit('editPost',editedPost)
                })
                .catch(err=>{
                    console.log(err);
                })
            },
        },getters:{
            loadedPosts(state){
                return state.loadedPosts
            }
        }
    })
}

export default createStore