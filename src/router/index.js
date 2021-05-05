import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../pages/login'
import main from '../pages/main'
import register from '../pages/register'
import article from '../pages/article'
import articleList from '../pages/articleList'
import user from '../pages/user'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/index',
            component: main,
            children: [
                {
                    path: "",
                    component: articleList
                },
                {
                    path: "article/:id",
                    component: article
                },
                {
                    path: 'user',
                    component: user
                },
            ]
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        },
        {
            path: "/",
            redirect: "/index"
        }
    ]
})