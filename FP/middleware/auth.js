export default function (context){
    console.log(['[Middleware] just auth']);
    if(!context.store.getters.isAuthenticated){
        context.redirect('/admin/auth')
    }
}