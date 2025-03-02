import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import liuyan from '@/views/modules/liuyan/list'
    import shuji from '@/views/modules/shuji/list'
    import shujiCollection from '@/views/modules/shujiCollection/list'
    import shujiLiuyan from '@/views/modules/shujiLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zixun from '@/views/modules/zixun/list'
    import config from '@/views/modules/config/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryShuji from '@/views/modules/dictionaryShuji/list'
    import dictionaryShujiCollection from '@/views/modules/dictionaryShujiCollection/list'
    import dictionaryZixun from '@/views/modules/dictionaryZixun/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShuji',
        name: '书籍分类',
        component: dictionaryShuji
    }
    ,{
        path: '/dictionaryShujiCollection',
        name: '收藏表类型',
        component: dictionaryShujiCollection
    }
    ,{
        path: '/dictionaryZixun',
        name: '资讯类型',
        component: dictionaryZixun
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/liuyan',
        name: '留言板',
        component: liuyan
      }
    ,{
        path: '/shuji',
        name: '书籍',
        component: shuji
      }
    ,{
        path: '/shujiCollection',
        name: '书籍收藏',
        component: shujiCollection
      }
    ,{
        path: '/shujiLiuyan',
        name: '书籍留言',
        component: shujiLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zixun',
        name: '书籍资讯',
        component: zixun
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
