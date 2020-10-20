<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
        <PostPreview id="1" 
          thumbnail= "https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg"
          title="Hello There!"

          previewText="This is my first post"
        />
    </section>
  </div>
  
</template>

<script>
import PostPreview from '@/components/posts/PostPreview'
export default {
  components: {
    PostPreview
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

</style>