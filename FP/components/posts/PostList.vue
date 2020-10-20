<template>
    <section class="post-list">
        <PostPreview id="1" 
          thumbnail= "https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg"
          title="Hello There!"

          previewText="This is my first post"
        />
    </section>
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

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>