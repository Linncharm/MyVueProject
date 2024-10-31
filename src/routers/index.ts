import {createRouter,createWebHistory} from 'vue-router'
import Project from "@/components/Project.vue";
import Svg from "@/components/Svg.vue";
import Table from "@/components/Table.vue";
import Tree from "@/components/Tree.vue";
import Home from "@/views/Home.vue";
import Blog from "@/components/Blog.vue";

const Router  = createRouter({
    history: createWebHistory(),
    routes:[

        {
            path:'/',
            redirect:'/home/blog',
        },
        {
            path:'/home',
            component:Home,
            redirect:'/home/blog',
            children:[
                {
                    path:'blog',
                    name:'blog',
                    component:Blog
                },
                {
                    path:'project',
                    name:'project',
                    component:Project,
                    children:[
                        {
                            path:'table',
                            name:'table',
                            component:Table
                        },
                        {
                            path:'svg',
                            name:'svg',
                            component:Svg
                        },
                        {
                            path:'tree',
                            name:'tree',
                            component:Tree
                        }
                    ]
                },
            ]
        },


    ]
})

export default Router;