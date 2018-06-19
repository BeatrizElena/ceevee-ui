import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';
import Validator from '../mixins/object-validator';

/**
 * Model description goes here.
 * @class
 * @augments ember-data/model
 * @augments ember-model-validator/mixins/object-validator
 *
 * @property name {String} required
 * @property title {String}
 * @property description {String}
 *
 * @property email {String}
 * @property voice {String}
 * @property url {String}
 *
 * @property linked_in_username {String}
 * @property facebook_username {String}
 * @property twitter_username {String}
 * @property github_username {String}
 *
 * @property street_address {String}
 * @property extended_address {String}
 * @property locality {String}
 * @property region {String}
 * @property postal_code {String}
 * @property country_name {String}
 *
 * @property updated_at {Date}
 * @property created_at {Date}
 */
const Personal = Model.extend(Validator, {

  // =attributes

  name: attr('string'),
  title: attr('string'),
  description: attr('string'),

  email: attr('string'),
  voice: attr('string'),
  url: attr('string'),

  linked_in_username: attr('string'),
  facebook_username: attr('string'),
  twitter_username: attr('string'),
  github_username: attr('string'),

  street_address: attr('string'),
  extended_address: attr('string'),
  locality: attr('string'),
  region: attr('string'),
  postal_code: attr('string'),
  country_name: attr('string'),

  updated_at: attr('date'),
  created_at: attr('date'),

  // =validations

  /**
   * @memberof Personal
   * @see {@link https://github.com/esbanarango/ember-model-validator}
   */
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  validations: {
    name: {presence: true},
    url: {
      URL: true
    }
  }
});

export default Personal;
