define(['vue', 'VueRouter', 'ELEMENT', 'routers'], function (Vue, VueRouter, element, routers) {
    Vue.use(element);
    Vue.use(VueRouter);
    const router = new VueRouter({
        routers // （缩写）相当于 routers: routers
    })
    const app = new Vue({
        delimiters: ['${', '}'],
        router,
        data: {
            visible: false,
            message: 'hello requirejs vue vue-router element-ui node project'
        }
    }).$mount('#app');
    return app;
});