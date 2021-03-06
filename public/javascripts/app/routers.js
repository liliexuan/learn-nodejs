// 1. 定义（路由）组件。可以从其他文件 import 进来
define(['vue', 'text!Foo'], function (Vue, foo) {
    'use strict';
    // 1. 定义（路由）组件。可以从其他文件 import 进来
    const Foo = {
        template: foo
    }
    const Bar = {
        template: '<div>bar</div>'
    }
    // 2. 定义路由 每个路由应该映射一个组件。 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象。我们晚点再讨论嵌套路由。
    const routes = [{
            path: '/foo',
            component: Foo
        },
        {
            path: '/bar',
            component: Bar
        }
    ]
    return routes;
});