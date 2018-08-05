import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'

import VueResource from 'vue-resource';

//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
//Vue.$http.headers.common['Access-Control-Request-Method'] = '*';
//Vue.http.options.crossOrigin = true;

Vue.use(Router)
Vue.use(VueResource)
Vue.use(Vuetify);

let testRoutes = require('./routes').default;

export default new Router({
  mode: 'history',
  routes: testRoutes
})
