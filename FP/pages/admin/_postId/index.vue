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

export default {
    layout:'admin',
    components:{
        AdminPostForm
    },
    middleware:['check-auth','auth'],
    asyncData(context){
        return context.app.$axios.$get(
            '/posts/' +
            context.params.postId +
            '.json'
        )
        .then( data=> {
            console.log(data);
            return {
                loadedPost : {...data , id:context.params.postId}
            }
        })
        .catch(e=> console.log(e))
    },
    methods: {
        onSubmitted(editedPost){
             
            this.$store.dispatch('editPost',editedPost)
            .then(()=>{
                this.$router.push('/admin')
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