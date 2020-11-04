export default function (context){
    console.log(['[Middleware] check auth']);
    if(process.client){
        context.store.dispatcch('initAuth');
    }
    
}