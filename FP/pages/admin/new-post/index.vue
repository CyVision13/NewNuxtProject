<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
export default {
    components :{
        AdminPostForm
    },
    layout :'admin'
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