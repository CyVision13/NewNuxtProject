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
    }
}
</script>