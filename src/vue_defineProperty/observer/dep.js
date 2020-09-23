let id = 0;
export class Dep {
  constructor() {
    this.id = ++id;
    this.subs = [];
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }

  notify() {
    const subs = this.subs.slice();
    for (let i = 0; i < subs.length; i ++) {
      subs.update();
    }
  }

  addSub(watcher) {
    this.subs.push(watcher);
  }
}
