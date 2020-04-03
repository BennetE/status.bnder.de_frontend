import Vue from "vue";
import VueRouter from "vue-router";
import ViewHome from "../views/ViewHome.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "ViewHome",
        component: ViewHome
    },
    {
        path: "/websites",
        name: "Websites",
        component: () => import("../views/ViewWebsites.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
