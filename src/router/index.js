import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/IndexComponent/IndexComponent'
import PortfolioComponent from '@/components/PortfolioComponent/PortfolioComponent'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexComponent
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: PortfolioComponent
    }
  ]
})
