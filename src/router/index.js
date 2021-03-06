import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/accountcenter',
    name: 'accountcenter',
    component: () => import('../views/AccountCenter.vue'),
    children:[
      {
        path:'userinfo',
        component: () => import('../components/accountcenter/UserInfo'),
      },
      {
        path:'myapp',
        component: () => import('../components/accountcenter/Application'),
      },
      {
        path:'agreement',
        component: () => import('../components/accountcenter/Agreement'),
      }
    ]
  },
  {
    path: '/applicationlist',
    name: 'applicationlist',
    component: () => import('../views/ApplicationList.vue')
  },
  {
    path: '/accountcenter/acc',
    name: 'accountcentersub',
    component: () => import('../views/accountCenterSub.vue')
  },
  {
    path: '/accountcenter/acc/accf',
    name: 'accountconfirm',
    component: () => import('../views/accouConfirm.vue')
  },
  {
    path: '/devhelp',
    name: 'devhelp',
    component: () => import('../views/DevHelp.vue')
  },
  {
    path: '/msgcenter',
    name: 'msgcenter',
    component: () => import('../views/MsgCenter.vue')
  },
  {
    path: '/msgDetail',
    name: 'msgDetail',
    component: () => import('../views/msgDetail.vue')
  },
  {
    path: '/procapability',
    name: 'procapability',
    component: () => import('../views/ProCapability.vue'),
  },
  {
    path: '/productintro',
    name: 'productintro',
    component: () => import('../views/ProductIntro.vue')
  },
  {
    path: '/productdetail',
    name: 'productdetail',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: '/devaccess',
    name: 'devaccess',
    component: () => import('../views/devAccess.vue')
  },
  {
    path: '/videotutorialall',
    name: 'videotutorialall',
    component: () => import('../views/VideoTutorialAll.vue')
  },
  {
    path: '/sandbox',
    name: 'sandbox',
    component: () => import('../views/SandBox.vue'),
    children:[
        {
          path:'parameterset',
          component: () => import('../components/sandbox/docmanage/ParameterSet'),
        },
        {
          path:'offlinedoc',
          component: () => import('../components/sandbox/docmanage/OfflineDoc'),
        },
    ]
  },
  {
    path: '/accessguidedetail',
    name: 'accessguidedetail',
    component: () => import('../views/AccessGuideDetail.vue')
  },
  {
    path: '/sandboxtest',
    name: 'sandboxtest',
    component: () => import('../views/SandBoxTest.vue'),
  },
  {
    path: '/documentcenter',
    name: 'documentcenter',
    component: () => import('../views/DocumentCenter.vue')
  },
  {
    path: '/createnewapp',
    name: 'createnewapp',
    component: () => import('../views/CreateNewApp.vue')
  },
  {
    path: '/appcenter',
    name: 'appcenter',
    component: () => import('../views/ApplicationCenter.vue')
  },
  {
    path: '/passwordForget',
    name: 'passwordForget',
    component: () => import('../views/passwordForget.vue')
  },
  {
    path: '/passwordForgetOK',
    name: 'passwordForgetOK',
    component: () => import('../views/passwordForgetOK.vue')
  },
  {
    path: '/helpquestion',
    name: 'helpquestion',
    component: () => import('../views/HelpQuestion.vue')
  },
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
