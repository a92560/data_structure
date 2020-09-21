class EventBus {
  constructor() {
    this.eventBus = {};
  }

  listen(name, fn) {
    (!this.eventBus[name] && (this.eventBus[name] = []))
    this.eventBus[name].push(fn);
  }

  remove(name, fn) {

    if (!fn) {
      this.eventBus[name] = [];
      return this;
    }

  }

  trigger(name, ...args) {
    if (Array.isArray(this.eventBus[name])) {
      this.eventBus[name].forEach(it => {
        it.apply(null, args);
      })
    }
  }

  once(event, fn) {
    const self = this;
    function handler() {
    }
  }
}

const e1 = new EventBus();
e1.listen('classBegin', () => {
  console.log('上课了');
})

e1.listen('classOver', () => {
  console.log('下课了');
})

e1.trigger('classBegin');
