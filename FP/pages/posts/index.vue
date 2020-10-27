<template>
    <div class="posts-page">
       <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>
import PostList from '@/components/posts/PostList'
export default {
    components: {
        PostList
    },
    asyncData(context){
        return new Promise((resolve,reject)=>{
            setTimeout(()=> {
        resolve ({
        loadedPosts : [
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
        })
        
        
        
        
        },1500)
        // reject(new Error)
      })
      .then(data=>{
          return data
      })
      .catch(e =>{
          context.error(new Error())
      })
    
  }
}
</script>
<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>