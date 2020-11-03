<template>
    <div class="admin-auth-page">
        <div class="auth-container">
            <form @submit.prevent="onSubmit">
                <AppControlInput v-model="email" type="email">E-Mail Address</AppControlInput>
                <AppControlInput v-model="password" type="password">Password</AppControlInput>
                <AppButton type="submit"> {{isLogin ? 'Login' : 'Sign Up'}}</AppButton>
                <AppButton
                    type="button"
                    btn-style="inverted"
                    style="margin-left:10px"
                    @click="isLogin= !isLogin">Switch to {{ isLogin ? 'Signup' :'Login'}}  
                >
                    
                </AppButton>

            </form>
        </div>
    </div>
</template>

<script>

   

export default {
    layout:'admin',
    
    name:'AdminAuthPage',
    data(){
        return {
            isLogin:true,
            email:'',
            password:''
        }
    },
    methods:{
        onSubmit(){
            this.$axios.$post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
            +process.env.fbAPIKey,{
                email:this.email,
                password:this.password,
                returnSecureToken: true
            })
            .then(result => {
                console.log(result);
            })
            .catch(e => console.log(e))
        }
    }
}
</script>
<style scoped>

.admin-auth-page {
    padding: 20px;
}

.auth-contianer {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ccc;
    width: 300px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
}
</style>