<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ loadedPost.title}}</h1>
            <div class="post-details">
                <div class="post-detail">Last updated on: {{ loadedPost.updatedDate}}</div>
                <div class="post-detail">Written by {{loadedPost.author}}</div>
            </div>
            <p class="post-content">{{ loadedPost.content}}</p>
        </section>
        <section class="post-feedback">
            <p>let me know what you think abot post, send a mail to <a href="mailto:feedback@ariana.academy">feedback@ariana.academy</a> </p>
        </section>
    </div>
</template>




<script>
export default {
    asyncData(context, callback) {
        // return new Promise().catch (e =>{
        //     context.Error(new Error())
        // })
        setTimeout(()=>{
            // callback(new Error(), {
                callback(null, {
                loadedPost: {
                     
                    id:"1",
                    title:`first post (ID: ${context.route.params.id})`,
                    previewText:"this is our first post!",
                    author:"Reza",
                    updatedDate: new Date(),
                    content: 'some dummy text ...',
                    thumbnail:"https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg"
                    
                }
            })
        },1000)

    }
}
</script>




<style  scoped>

.single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
}

.post {
    width: 100%;
}

@media (min-width: 768px_){
    .post {
        width: 600px;
        margin: auto;
    }
}

.post-title {
    margin: 0;
}

.post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 768px) {
    .post-details {
        flex-direction: row;
    }
}

.post-detail {
    color: rgb(88,88,88);
    margin: 0 10px;
}

.post-feedback a {
    color: red;
    text-decoration: none;
}
.post-feedback a:hover,
.post-feedback a:active {
    color: salmon;
}
</style>


