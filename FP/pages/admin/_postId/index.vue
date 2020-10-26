<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
    layout:'admin',
    components:{
        AdminPostForm
    },
    data(){
        return {
            loadedPost:{
                author: "reza",
                title:'My Awesome Post',
                content: "Super amazing thanks for that!",
                thumbnailLink:"https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg "
            }
        }
    },
    methods: {
        onSubmitted(editedPost){
            axios.put('https://vuejs-f4c7c.firebaseio.com/posts/' +this.$route.params.postId+'.json',editedPost)
                .then(result=>{
                    this.$router.pish('/admin')
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }
}
</script>
<style scoped>
    .update-form {
        width: 90%;
        margin: 20px auto;
    }

    @media(min-width: 768px){
        .update-form {
            width: 500px;
        }
    }
</style>