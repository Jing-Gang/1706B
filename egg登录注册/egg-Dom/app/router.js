module.exports = app =>{
    let {router,controller} = app
    // router.get('/',async (ctx,next)=>{
    //     ctx.body = 'hello egg'
    // })
    router.get('/',controller.index.init)
    router.post('/registry',controller.user.index)
    router.get('/identity',controller.user.getIdntity)
    router.post('/getlogin',controller.user.getlogin)
}