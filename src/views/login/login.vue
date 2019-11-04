<template>
    <div class="">
        <p class="bar">圈子登录</p>
        <div class="iptbox">
            <el-input class="username ipt" v-model="ipt" placeholder="账号"></el-input>
            <el-input class="password ipt" placeholder="密码" v-model="input" show-password></el-input>
        </div>
        <div class="loginbox">
            <el-button class="loginbtn" type="danger" @click="btnlogin(ipt,input)">登录</el-button>
        </div>
        <a class="JumpToRegister">没有账号，快速注册</a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',
            ipt:''
        }
    },
    methods:{
        btnlogin(user,pass){
            console.log(user,pass)
        }
    }
}
</script>
<style lang="scss">
    .bar{
        width: 100%;
        height: 45px;
        text-align: center;
        line-height: 45px;
        font-size: 0.4rem;
        background: #eee;
    }
    .iptbox{
        width: 100%;
        text-align: center;
    }
    .ipt {
        width: 355px;
    }
    .loginbox{
        width: 100%;
        text-align: center;
        .loginbtn{
            width: 300px;
        }
    }
    .JumpToRegister{
        width: 133px;
        height: 23px;
        font-size: 0.35rem;
        margin-left: 20px;
    }
</style>
