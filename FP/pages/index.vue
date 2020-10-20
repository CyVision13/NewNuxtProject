<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link class="post-preview" :to="'/posts/' + 1 ">
        <article >
          <div class="post-thumbnail" style="background-image: url('https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg"></div>
          <div class="post-content">
            <h1>Post Title 1</h1>
            <p>Preview Text</p>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link class="post-preview" :to="'/posts/' + 2 ">
        <article >
 <div class="post-thumbnail" style="background-image: url('https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg"></div>
          <div class="post-content">
            <h1>Post Title 2</h1>
            <p>Preview Text 2</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30p;
  box-sizing: border-box;
  background-position: cover;

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

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black ;
}

@media (min-width: 850px){
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding:  10px;
  text-align: center;
}


a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>