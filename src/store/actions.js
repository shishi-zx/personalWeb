/* 
通过 mutation 间接更新 state 的多个方法的对象
*/
import {
    RECEIVE_ARTICLES, RECEIVE_USER
} from './mutation-types'
import {
    reqAllArticle, 
} from '../api'

export default {
    //异步获取文章
    async getArticle ({commit}) {
        // 发送异步 Ajax 请求
        const result = await reqAllArticle()
        // 提交一个 mutation
        if(result.code == 1){
            const articles = result.data
            commit(RECEIVE_ARTICLES,{articles})
        }
    },

    //用户登录
    getUser ({commit},user) {
        commit(RECEIVE_USER,{user})
    }
}