import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | education', function(hooks) {
  setupTest(hooks);

  test('it validates', function(assert) {
    let store = this.owner.lookup('service:store');
    let org = run(() => store.createRecord('organization', {
      name: 'Big Brother',
      url: 'https://www.example.net'
    }));
    let model = run(() => store.createRecord('education', {
      name: 'Education',
      credential: 'Certificate',
      organization: org
    }));
    assert.ok(model.validate());
  });

  test('it does not validate when name is missing', function(assert) {
    let store = this.owner.lookup('service:store');
    let org = run(() => store.createRecord('organization', {
      name: 'Big Brother',
      url: 'https://www.example.net'
    }));
    let model = run(() => store.createRecord('education', {
      credential: 'Certificate',
      organization: org
    }));
    assert.notOk(model.validate());
  });

  test('it does not validate when credential is missing', function(assert) {
    let store = this.owner.lookup('service:store');
    let org = run(() => store.createRecord('organization', {
      name: 'Big Brother',
      url: 'https://www.example.net'
    }));
    let model = run(() => store.createRecord('education', {
      name: 'Education',
      organization: org
    }));
    assert.notOk(model.validate());
  });
});
