<template>
    <form @submit.prevent="onSave">
                <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
                <AppControlInput v-model="editedPost.title">Title</AppControlInput>
                <AppControlInput v-model="editedPost.thumbnailLink">thumbnail Link</AppControlInput>
                <AppControlInput 
                    control-type="textarea"
                v-model="editedPost.content">Content</AppControlInput>
                <AppButton type="submit">Save </AppButton>
                <AppButton 
                    type="button"
                    style="margin-left : 10px"
                    btn-style="cancel"
                    @click="onCancel"
                > Cancle </AppButton>

            </form>
</template>

<script>
import AppControlInput from '~/components/UI/AppControlInput.vue'
import AppButton from '~/components/UI/AppButton.vue'
export default {
    components:{
        AppControlInput,
        AppButton
    },
    props : {
        post: {
            type:Object,
            required:false
        }
    },
    data(){
        return {
            editedPost : this.post 
            ? {...this.post}
            : {
               author :"",
               title:"",
               thumbnailLink: "",
               content: ''
            }
        }
    },
    methods: {
        onSave(){
            // Save the post
            this.$emit('submit',this.editedPost)
        },
        onCancel(){
            // Navigate back
            this.$router.push('/admin')
        }
    }
}
</script>