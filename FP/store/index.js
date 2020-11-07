
import Vuex from 'vuex'
import Cookie from 'js-cookie'


const createStore = ()=>{
    return new Vuex.Store({
        state:{
            loadedPosts:[],
            token : null
        },
        mutations: {
            setPosts(state,posts) {
                state.loadedPosts = posts
            },
            addPost(state,post){
                state.loadedPosts.push(post)
            },
            editPost(state,editedPost){
                const postIndex = state.loadedPosts.findIndex(
                    post=>post.id === editedPost.id
                    )
                state.loadedPosts[postIndex] = editedPost
            },
            setToken(state,token){
                state.token = token

            },
            clearToken(state){
                state.token = null ;
            }
        },
        actions: {
            nuxtServerInit(vuexContext,context){
                return context.app.$axios.$get('/posts.json')
                    .then( data=>{
                        const postsArray = []
                        for(const key in data){
                            postsArray.push({...data[key],id:key})
                        }
                        vuexContext.commit('setPosts',postsArray)
                    })
                    .catch(e=> console.log(e))
            },
            setPosts(vuexContext,posts){
                vuexContext.commit('setPosts',posts)

            },
            addPost(vuexContext,post){
                const createdPost =  
                {...post,updatedDate:new Date()
                }
                return this.$axios.$post('/posts.json?auth='+ vuexContext.state.token,createdPost)
               
                
            .then(data => {
                vuexContext.commit('addPost',{...createdPost,id:data.name})
                this.$router.push('/admin')

            })
            .catch(e => console.log(e))
            },
            editPost(vuexContext,editedPost){
                return this.$axios.$put('/posts/' +
                editedPost.id +
                '.json?auth='+ vuexContext.state.token,editedPost)
                .then(res => {
                    vuexContext.commit('editPost',editedPost)
                    
                } )
                .catch(e=> console.log(e))
            },
            authenticateUser(vuexContext,authData){
                let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
                +process.env.fbAPIKey
                if(!authData.isLogin) {
                    authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
                +process.env.fbAPIKey
                }
                
                return this.$axios.$post(authUrl,{
                    email:authData.email,
                    password:authData.password,
                    returnSecureToken: true
                })
                .then(result => {
                    vuexContext.commit('setToken',result.idToken)
                    localStorage.setItem('token',result.idToken)
                    localStorage.setItem('tokenExpiration',new Date().getTime() + result.expiresIn *1000)
                    Cookie.set('jwt',result.idToken)
                    Cookie.set('expirationDate',new Date().getTime() + result.expiresIn *1000)
                    vuexContext.dispatch('setlogoutTimer',result.expiresIn*1000)
                })
                .catch(e => console.log(e))
            },
            setLogoutTimer(vuexContext,duration){
                setTimeout(()=>{
                    vuexContext.commit('clearToken')
                },duration)
            },
            initAuth(vuexContext,req){
                let token;
                let expirationDate ;
                if(req){
                    if(!req.headers.cookie){
                        return;
                    }
                    const jwtCookie = req.headers.cookie.split(';').find(c=>c.trim().startsWith('jwt='))
                    if(!jwtCookie){
                        return
                    }
                    token = jwtCookie.split('=')[1];
                     expirationDate = req.headers.cookie.split(';').find(c=>c.trim().startsWith('expirationDate='))
                    .split('=')[1]

                }else {
                     token = localStorage.getItem('token')
                     expirationDate = localStorage.getItem('tokenExpiration')
    
                    if(new Date().getTime() > +expirationDate || !token){ // + for converting to number
                        return 
                    }
                }
                
                vuexContext.dispatch('setLogoutTimer',+expirationDate - new Date().getTime())
                vuexContext.commit('setToken',token)
            }
        },
        getters:{
            loadedPosts(state){
                return state.loadedPosts
            },
            isAuthenticated(state){
                return state.token != null
            }
        }
    })
}

export default createStore