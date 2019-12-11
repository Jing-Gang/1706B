<template>
    <div>
        <el-container >
            <el-form :model="userinfo" :rules="userRule" ref="myform">
                <el-form-item label="姓名" prop="username">
                    <el-input v-model="userinfo.username"></el-input>
                </el-form-item>
                <el-form-item label="学号" prop="usercode">
                    <el-input v-model="userinfo.usercode"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="userinfo.password"></el-input>
                </el-form-item>
                <el-form-item label="身份" prop="identity">
                    <el-select v-model="userinfo.identity" placeholder="请选择身份">
                        <el-option v-for="item in options" :key="item.id" :label="item.title" :value="item.title">
                            {{item.title}}</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submit">提交</el-button>
                </el-form-item> 
            </el-form>
        </el-container>
    </div>
</template>

<script>
import {getIdentity,sendUserInfo} from '../../../api/registry'
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
                    ],
                    usercode:[
                        {
                            required:true,message:'请输入学号',trigger:'change'                            
                        }
                    ],
                    identity:[
                        {
                            required:true,message:'请输入密码',trigger:'change'                            
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
        submit(){
            this.$refs['myform'].validate((res,msg)=>{
                if(res){
                    // 发ajax请求提交数据
                    console.log(this.userinfo)
                    sendUserInfo(this.userinfo).then(res=>{
                        if(res.data.code){
                            alert(res.data.msg)
                            this.$router.push('/login')
                        }else{
                            console.log(res.data)
                            alert(res.data.msg)
                        }
                    })
                    return ;
                }
            })
        }
    },
}
</script>

<style lang="scss">
    
</style>