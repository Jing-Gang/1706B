module.exports = app =>{
    console.log('app',app.config.coreMiddlewares)
    app.validator.addRule('phone',(rule,value)=>{
        let res = /^1[356789]\d{9}$/
        if(!res.test(value)){
            return '请输入正确的手机号'
        }
    })
}