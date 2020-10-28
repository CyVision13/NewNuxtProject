<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" 
                @submit="onSubmitted"
            />
        </section>
    </div>
</template>
<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'
export default {
    layout:'admin',
    components:{
        AdminPostForm
    },
    asyncData(context){
        return axios.get(
            'https://vuejs-f4c7c.firebaseio.com/posts/' +
            context.params.postId +
            '.json'
        )
        .then(res => {
            console.log(res);
            return {
                loadedPost : res.data
            }
        })
        .catch(e=> console.log(e))
    },
    methods: {
        onSubmitted(editedPost){
            axios.put('https://vuejs-f4c7c.firebaseio.com/posts/' +
            this.$route.params.postId +
            '.json',editedPost)
            .then(res => console.log(res) )
            .catch(e=> console.log(e))
            
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