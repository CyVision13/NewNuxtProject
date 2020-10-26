<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
export default {
    components :{
        AdminPostForm
    },
    layout :'admin',
    methods:{
        onSubmitted(postData){
            axios.post('https://vuejs-f4c7c.firebaseio.com/posts.json',{...postData ,updatedDate: new Date()})
                .then(result=>{
                    this.router.pish('/admin')
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }
}
</script>

<style scoped>
    .new-post-form {
        width: 90%;
        margin: 20px auto;
    }
    @media (min-width: 768px){
        .new-post-form {
            width: 500ox;
        }
    }
</style>