import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import Container from "../views/Container.vue";

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
    }
]
const router = createRouter({
        routes: routes,
        history: createWebHashHistory()
    }
)

export default router
