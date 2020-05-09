import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/who',
        component: () => import('pages/Who.vue')
      },
      {
        path: '/who/:guestId',
        component: () => import('pages/Guests/Guest.vue')
      },
      { path: '/what', component: () => import('pages/What.vue') },
      { path: '/when', component: () => import('pages/When.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
