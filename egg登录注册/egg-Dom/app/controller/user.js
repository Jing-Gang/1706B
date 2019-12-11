const Controller = require('egg').Controller
const uid = require('uid')
const jwt = require('jsonwebtoken')
module.exports = class extends Controller{
    async index(ctx){
        let {request} = ctx
        // console.log(ctx.request.body)
        let msg = this.app.validator.validate({
            password:'password',
            username:'string',
            identity:'string'
        },request.body)
        // console.log(msg)
        if (msg) {
            ctx.body = {
                code:0,
                msg:'格式错误',
                data:msg
            }
        }else{
            ctx.body={
                code:1,
                msg:'注册成功'
            }
        }
        // console.log(ctx.body)

        // database|
        await this.app.mysql.insert('user',{
            ...request.body,
            id:uid(10)
        })
    }
    async getIdntity(){ //查询表
        let data= await this.app.mysql.select('identity')
        this.ctx.body={
            msg:'success',
            code:1,
            data:[...data]
        }
    }
    async getlogin(ctx){
        let {password,username} = this.ctx.request.body
        let data= await this.app.mysql.get('user',{
            username,
            password
        })
        console.log('1........',data)  
        if (data) {
            this.ctx.body = {
                code:1,
                msg:'登录成功',
                data:{
                    token:jwt.sign({...data},this.app.config.keys)
                }
            }
             return ;
        }
        this.ctx.body = {
            code:0,
            msg:'用户名密码输入有误',
            data:{...data}
        }
    }
}