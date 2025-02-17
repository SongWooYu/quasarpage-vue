const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LogoImagePage.vue') },
      { path: 'dysetting', component: () => import('pages/DySettingPage.vue') },
      { path: 'setting', component: () => import('pages/SettingPage.vue') },
      { path: 'password', component: () => import('pages/PasswordPage.vue') }
    ]
  },

  // Always leave this as the last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes;