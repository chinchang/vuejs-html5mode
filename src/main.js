import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import User from './User.vue'
import Router from 'vue-router'


Vue.use(Router);

var router = new Router({
	hashbang: false,
	history: true
});

router.map({
  '/': {
    component: Home
  },
  '/user': {
    component: User,
  },
  /*'/product': {
    component: Product,
  }*/
})

/*new Vue({
  el: 'body',
  components: { App }
})
*/

router.start(App, 'app');
