<template>
    <div>
        <el-container >
            <el-form :model="userinfo" :rules="userRule" ref="myform">
                <!-- <el-form-item label="身份" prop="identity">
                    <el-select v-model="userinfo.identity" placeholder="请选择身份">
                        <el-option v-for="item in options" :key="item.id" :label="item.title" :value="item.title">
                            {{item.title}}</el-option>
                    </el-select>
                </el-form-item> -->
                <el-form-item label="姓名" prop="username">
                    <el-input v-model="userinfo.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="userinfo.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="loginbtn">登录</el-button>
                    <el-button @click="regibtn">注册</el-button>
                </el-form-item>
            </el-form>
        </el-container>
    </div>
</template>

<script>
import {getIdentity,sendUserInfo,getlogin} from '@/api/registry'
export default {
    data() {
        return {
            userinfo:{
                username:'',
                password:'',
                usercode:'',
                identity:''
            },
            userRule:{
                username:[
                    {
                        required:true,message:'请输入姓名',trigger:'change'
                    }
                ],
                password:[
                    {
                        required:true,message:'请输入密码',trigger:'change'
                    },
                    {
                        max:16,min:6,message:'长度在6到16个字符',trigger:'change'
                    }
                ]
            },
            options:[]
        }
    },
    mounted() {
        window.aa=this
        getIdentity().then(res=>{
            this.options=res.data.data
            this.userinfo.identity = this.options[0].title
        })
    },
    methods: {
        loginbtn(){
            this.$refs['myform'].validate((res,msg)=>{
                if(res){
                    // 发ajax请求提交数据
                    // console.log('1......',this.userinfo)
                    getlogin(this.userinfo).then(res=>{
                        console.log(res)
                        if (res.data.code==1) {
                            window.localStorage.setItem('token',res.data.data.token)
                            this.$router.push('/')                            
                        }else{
                            alert(res.data.msg)
                        }
                    })
                    return ;
                }
            })
        },
        regibtn(){
            this.$router.push('/register')
        }
    },
}
</script>

<style>
    
</style>