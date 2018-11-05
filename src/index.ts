import devtools from '@vue/devtools';

import Vue from "vue";

// Bootstrap
import BootstrapVue from "bootstrap-vue"
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Custom
import HelloComponent from "./components/Hello.vue";

if (process.env.NODE_ENV === 'development') {
    devtools.connect(/* host, port */)
} 

let v = new Vue({
    el: "#app",
    data: { name: "World" },
    components: {
        HelloComponent
    }
});