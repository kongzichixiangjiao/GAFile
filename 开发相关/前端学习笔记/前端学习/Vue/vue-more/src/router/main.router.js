export const Main = [
    {
        path: '/Home',
        name: 'Home',
        component: () => import('@/pages/main/home/index.vue'),
        children: [
            {
                path: 'product/:id',
                name: 'home-product',
                component: () => import('@/pages/main/home/product.vue')
            }
        ]
    }, {
        path: '/Keybord',
        name: 'Keybord',
        component: () => import('@/pages/main/keybord/index.vue')
    }, {
        path: '/Order',
        name: 'Order',
        component: () => import('@/pages/main/order/index.vue')
    }, {
        path: '/Print',
        name: 'Print',
        component: () => import('@/pages/main/print/index.vue')
    }
]