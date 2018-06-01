import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | job', function(hooks) {
  setupTest(hooks);

  test('it has default values', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('job'));
    assert.equal(model.remote, false);
  });

  test('it validates', function(assert) {
    let store = this.owner.lookup('service:store');
    let org = run(() => store.createRecord('organization', {
      name: 'Big Brother',
      url: 'https://www.example.net'
    }));
    let model = run(() => store.createRecord('job', {
      title: 'A Job',
      organization: org,
      started_on: new Date()
    }));
    assert.ok(model.validate());
  });

  test('it does not validate when title is missing', function(assert) {
    let store = this.owner.lookup('service:store');
    let org = run(() => store.createRecord('organization', {
      name: 'Big Brother',
      url: 'https://www.example.net'
    }));
    let model = run(() => store.createRecord('job', {
      organization: org,
      started_on: new Date()
    }));
    assert.notOk(model.validate());
  });

  test('it does not validate when started_on is missing', function(assert) {
    let store = this.owner.lookup('service:store');
    let org = run(() => store.createRecord('organization', {
      name: 'Big Brother',
      url: 'https://www.example.net'
    }));
    let model = run(() => store.createRecord('job', {
      title: 'A Job',
      organization: org
    }));
    assert.notOk(model.validate());
  });
});
