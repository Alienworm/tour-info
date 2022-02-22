import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/college_list',
    name: 'CollegeList',
    component: () => import('../views/CollegeList.vue')
  },
  {
    path: '/tour_list',
    name: 'TourList',
    component: () => import('../views/TourList.vue')
  }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
