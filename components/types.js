class Flag {
  constructor({ key, label, changes, env }) {
    this.key = key;
    this.label = label;
    this.changes = changes;
    this.env = env.map(e => new Env(e));
  }
}

class Env {
  constructor({ name, enabled, stable, released }) {
    this.name = name,
    this.enabled = enabled,
    this.stable = stable,
    this.released = released
  }
}

module.exports = {
  Flag,
  Env
}
