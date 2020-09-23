import { queueWatcher } from './scheduler'

let id = 0;
class Watcher {
  constructor() {
    this.id = ++id;
    this.deps = [];
    this.newDeps = [];
    this.depIds = new Set();
    this.newDepIds = new Set();
    this.lazy = false;
    this.sync = false;
    this.dirty = false;
  }

  addDep(dep) {
    const id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  }

  update() {
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  }

  run() {

  }

}
