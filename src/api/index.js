/* 
包含n个接口请求函数的模块
返回值 promise对象
*/
import ajax from './ajax'
const BASE_URL = '/api'
//获取所有文章对象数据
export const reqAllArticle = () => ajax(BASE_URL+`/article`)
//获取指定文章
export const reqArticle = (id) => ajax(BASE_URL+'/article/article', id, 'POST')
//用户登录
export const reqLogin = (data) => ajax(BASE_URL+`/user/login`, data, 'POST')
//用户注册
export const reqRegister = (data) => ajax(BASE_URL+"/user/register", data, 'POST')
//获取文章评论
export const reqComment = (data) => ajax(BASE_URL+"/comment/comment", data, 'POST')
//评论文章
export const reqaddComment = (data) => ajax(BASE_URL+"/comment/addComment", data, 'POST')