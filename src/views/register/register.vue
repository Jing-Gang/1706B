<template>
    <div class="">
        <!-- <p class="bar">注册</p> -->
        <el-page-header @back="goBack" content="注册"></el-page-header>
        <div class="iptbox">
            <el-input class="username ipt" v-model="ipt" placeholder="账号"></el-input>
            <el-input class="password ipt" placeholder="密码" v-model="input" show-password></el-input>
        </div>
        <div class="loginbox">
            <el-button class="loginbtn" @click="btnregister()">注册</el-button>
        </div>
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
     methods: {
      goBack() {
        console.log('go back');
      },
      btnregister(){
          console.log("1")
      }
    }
}
</script>
<style lang="scss" scoped>
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
    .el-page-header__content{
        width: 50%;
        text-align: center;
    }
</style>
