import request from '@/untils/request'

export const getUserInfo = ()=>request.get('/getuserinfo',{
    headers:{
        token:window.localStorage.getItem('token')
    }
})