// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// can thiệp vào request trước / giữa / sau khi gửi 
// for sercurity 

// Vue.http.interceptors.push((request,next) => {
//   console.log(request);
//   if(request.method == "POST")
//     request.method = "PUT"
//     next(response => {
//       response.json = () => {
//         return {
//           message:response.header
//         }
//       }    
//     })
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
