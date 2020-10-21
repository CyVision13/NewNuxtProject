<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts"/>
  </div>
  
</template>

<script>
import PostList from '@/components/posts/PostList'
export default {
  components: {
    PostList
  },
  data(){
    return {
      loadedPosts: [
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
    }
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30p;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: cover;
  background-size: cover;

}
.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211,211,211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;

}

@media(min-width:768px){
  .intro h1{
    font-size: 2rem;
  }
}
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>