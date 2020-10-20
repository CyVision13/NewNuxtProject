<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm/>
        </section>
    </div>
</template>
<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
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
    }
}
</script>