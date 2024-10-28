import {createRouter,createWebHistory} from 'vue-router'
import Home from "@/components/Home.vue";
import Svg from "@/components/Svg.vue";
import Table from "@/components/Table.vue";
import Tree from "@/components/Tree.vue";

const Router  = createRouter({
    history: createWebHistory(),
    routes:[

        {
            path:'/',
            redirect:'/home',
        },
        {
            path:'/home',
            name:'home',
            component:Home,
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
})

export default Router;