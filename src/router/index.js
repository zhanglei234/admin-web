import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
    {path: '/acceptStore', component: () => import('@/views/login/acceptStore'), hidden: true},
    {path: '/login', component: () => import('@/views/login/index'), hidden: true},
    {path: '/404', component: () => import('@/views/404'), hidden: true},
    {
        path: '/store',
        component: () => import('@/views/home/store'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('@/views/home/index'),
            meta: {title: '首页', icon: 'home'}
        }]
    },

    {
        path: '/pms',
        component: Layout,
        redirect: '/pms/product',
        name: 'pms',
        meta: {title: '商品', icon: 'product'},
        children: [{
            path: 'product',
            name: 'product',
            component: () => import('@/views/pms/product/index'),
            meta: {title: '商品列表', icon: 'product-list'}
        },
           {
                path: 'addProduct',
                name: 'addProduct',
                component: () => import('@/views/pms/product/add'),
                meta: {title: '添加商品', icon: 'product-add'},
                hidden: true
            },
            {
                path: 'updateProduct',
                name: 'updateProduct',
                component: () => import('@/views/pms/product/update'),
                meta: {title: '修改商品', icon: 'product-add'},
                hidden: true
            },
            {
                path: 'productRecycle',
                name: 'productRecycle',
                component: () => import('@/views/pms/product/index'),
                meta: {title: '商品回收站', icon: 'product-recycle'},
                hidden: true
            },
            {
                path: 'productComment',
                name: 'productComment',
                component: () => import('@/views/pms/product/index'),
                meta: {title: '商品评价', icon: 'product-comment'},
                hidden: true
            },
            {
                path: 'productCate',
                name: 'productCate',
                component: () => import('@/views/pms/productCate/index'),
                meta: {title: '商品分类', icon: 'product-cate'}
            },
            {
                path: 'addProductCate',
                name: 'addProductCate',
                component: () => import('@/views/pms/productCate/add'),
                meta: {title: '添加商品分类'},
                hidden: true
            },
            {
                path: 'updateProductCate',
                name: 'updateProductCate',
                component: () => import('@/views/pms/productCate/update'),
                meta: {title: '修改商品分类'},
                hidden: true
            },
            {
                path: 'productAttr',
                name: 'productAttr',
                component: () => import('@/views/pms/productAttr/index'),
                meta: {title: '商品类型', icon: 'product-attr'}
            },
            {
                path: 'productAttrList',
                name: 'productAttrList',
                component: () => import('@/views/pms/productAttr/productAttrList'),
                meta: {title: '商品属性列表'},
                hidden: true
            },
            {
                path: 'addProductAttr',
                name: 'addProductAttr',
                component: () => import('@/views/pms/productAttr/addProductAttr'),
                meta: {title: '添加商品属性'},
                hidden: true
            },
            {
                path: 'updateProductAttr',
                name: 'updateProductAttr',
                component: () => import('@/views/pms/productAttr/updateProductAttr'),
                meta: {title: '修改商品属性'},
                hidden: true
            },
            {
                path: 'brand',
                name: 'brand',
                component: () => import('@/views/pms/brand/index'),
                meta: {title: '品牌管理', icon: 'product-brand'}
            },
            {
                path: 'addBrand',
                name: 'addBrand',
                component: () => import('@/views/pms/brand/add'),
                meta: {title: '添加品牌'},
                hidden: true
            },
            {
                path: 'updateBrand',
                name: 'updateBrand',
                component: () => import('@/views/pms/brand/update'),
                meta: {title: '编辑品牌'},
                hidden: true
            },


            {
                path: 'ProductConsult',
                name: 'ProductConsult',
                component: () => import('@/views/pms/productConsult/index'),
                meta: {title: '商品评论'},
                hidden: true
            }

        ]
    },
    {
        path: '/oms',
        component: Layout,
        redirect: '/oms/order',
        name: 'oms',
        meta: {title: '订单', icon: 'order'},
        children: [


            {
                path: 'order',
                name: 'order',
                component: () => import('@/views/oms/order/index'),
                meta: {title: '订单列表', icon: 'product-list'}
            },
            {
                path: 'orderDetail',
                name: 'orderDetail',
                component: () => import('@/views/oms/order/orderDetail'),
                meta: {title: '订单详情'},
                hidden: true
            },
            {
                path: 'deliverOrderList',
                name: 'deliverOrderList',
                component: () => import('@/views/oms/order/deliverOrderList'),
                meta: {title: '发货列表'},
                hidden: true
            }

        ]
    },


    {
        path: '/sys',
        component: Layout,
        redirect: '/sys/admin',
        name: 'sys',
        meta: {title: '系统管理', icon: 'home'},
        children: [


            {
                path: 'admin',
                name: 'admin',
                component: () => import('@/views/sys/admin/index'),
                meta: {title: '用户列表', icon: 'product-list'}
            }

        ]
    },

    {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})

