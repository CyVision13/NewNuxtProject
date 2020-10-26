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
    asyncData(context, callback) {
        return axios
        .get(process.env.baseUrl +'/posts/'+
            +context.params.id+
            '.json'
            )
            .then({
                loadedPost: {...res.data, id: context.params.id}
            })
            .catch(e => context.error(e))
    },
    methods: {
        onSubmitted(editedPost){
            this.$store.dispatch("editPost",editedPost)
                .then(()=>{
                    this.$router.pish('/admin')
                }
                    
                )
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