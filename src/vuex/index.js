/*
* 1. 维护状态
*
* */
import Vue from 'vue';
let _Vue;

function install(Vue) {
  _Vue = Vue;

  Vue.mixin({
    beforeCreated() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      } else if (this.$options.parent) {

      }
    }
  })
}

class Store {
  constructor(options = {}) {
    this.state = new Vue({
      data: options.state,
    })

    this.mutations = options.mutations || {};
  }

  commit = (type, ...args) => {
    const fn = this.mutations[type];
    fn.call(this, this.state, ..args)
  }
}

export default { Store, install }
