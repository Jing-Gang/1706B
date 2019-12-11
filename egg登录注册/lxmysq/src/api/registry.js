import request from '../untils/request'

export const getIdentity = ()=>request.get('/identity');
export const sendUserInfo = (data)=>request.post('/registry',data);
export const getlogin = (data)=>request.post('/getlogin',data)