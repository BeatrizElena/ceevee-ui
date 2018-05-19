import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | skill', function(hooks) {
  setupTest(hooks);

  test('it validates', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('skill', {
      name: 'My Skill',
      competency: 10
    }));
    assert.ok(model.validate());
  });

  test('it does not validate when name is missing', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('skill', {
      competency: 10
    }));
    assert.notOk(model.validate());
  });

  test('it does not validate when comptency is missing', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('skill', {
      name: 'My Skill'
    }));
    assert.notOk(model.validate());
  });

  test('it does not validate when competency is not an integer', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('skill', {
      name: 'My Skill',
      competency: 5.5
    }));
    assert.notOk(model.validate());
  });

  test('it does not validate when competency is out of range', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('skill', {
      name: 'My Skill',
      competency: 15
    }));
    assert.notOk(model.validate());
  });
});
