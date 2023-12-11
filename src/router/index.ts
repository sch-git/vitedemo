import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import Container from "../views/Container.vue";
import Learning from "../views/Learning.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/container",
        name: "Container",
        component: Container
    },
    {
        path: "/learning",
        name: "Learning",
        component: Learning,
    }
]
const router = createRouter({
        routes: routes,
        history: createWebHashHistory()
    }
)

export default router
