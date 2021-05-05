/* 
直接更新 state 的多个方法的对象
*/
import {
    RECEIVE_ARTICLES, RECEIVE_USER
} from './mutation-types'

export default {
    [RECEIVE_ARTICLES] (state, {articles}) {
        state.articles = articles
    },
    [RECEIVE_USER] (state,{user}){
        state.user = user
    }
}