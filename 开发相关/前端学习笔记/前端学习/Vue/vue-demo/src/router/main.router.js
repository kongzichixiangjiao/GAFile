export const Main = [
    {
        path: '/Home',
        name: 'Home',
        component: require('@/pages/main/home/index.vue').default,
        children: [
            {
                path: 'product/:id',
                name: 'home-product',
                component: require('@/pages/main/home/product.vue').default
            }
        ]
    }, {
        path: '/Keybord',
        name: 'Keybord',
        component: require('@/pages/main/keybord/index.vue').default
    }, {
        path: '/Order',
        name: 'Order',
        component: require('@/pages/main/order/index.vue').default
    }, {
        path: '/Print',
        name: 'Print',
        component: require('@/pages/main/print/index.vue').default
    }
]