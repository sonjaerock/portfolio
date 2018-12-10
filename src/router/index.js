import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/IndexComponent/IndexComponent'
import PortfolioComponent from '@/components/PortfolioComponent/PortfolioComponent'
import DetailPortfolioComponent from '@/components/DetailPortfolioComponent/DetailPortfolioComponent'

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
      path: '/project',
      name: 'Portfolio',
      component: PortfolioComponent
    },
    {
      path: '/project/:id',
      name: 'DetailPortfolio',
      component: DetailPortfolioComponent,
    }

  ]
})
