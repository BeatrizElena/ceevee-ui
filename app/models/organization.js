import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Validator from '../mixins/object-validator';

/**
 * An organization and its basic contact information.
 * @class
 * @augments ember-data/model
 * @augments ember-model-validator/mixins/object-validator
 * @property name {String} required
 * @property url {String}
 * @property street_address {String}
 * @property extended_address {String}
 * @property locality {String}
 * @property region {String}
 * @property postal_code {String}
 * @property country_name {String}
 * @property updated_at {Date}
 * @property created_at {Date}
 */
const Organization = Model.extend(Validator, {

  // =attributes

  name: attr('string'),
  url: attr('string'),
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
   * @memberof Organization
   * @see {@link https://github.com/esbanarango/ember-model-validator}
   */
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  validations: {
    name: {
      presence: true
    },
    url: {
      URL: true
    }
  }
});

export default Organization;
