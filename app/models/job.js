import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Validator from '../mixins/object-validator';

/**
 * Represents a job held at a specific point in time.  If job is currently held,
 * `ended_on` should be unfilled.
 * @class
 * @augments ember-data/model
 * @augments ember-model-validator/mixins/object-validator
 * @property title {String} required
 * @property description {String}
 * @property organization {Organization} required
 * @property remote {Boolean} was this a remote position?
 * @property started_on {Date} required
 * @property ended_on {Date}
 * @property updated_at {Date}
 * @property created_at {Date}
 */
const Job = Model.extend(Validator, {

  // =attributes

  title: attr('string'),
  description: attr('string'),
  organization: belongsTo('organization'),
  remote: attr('boolean', {defaultValue: false}),
  started_on: attr('date'),
  ended_on: attr('date'),
  updated_at: attr('date'),
  created_at: attr('date'),

  // =validations

  /**
   * @memberof Job
   * @see {@link https://github.com/esbanarango/ember-model-validator}
   */
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  validations: {
    title: {presence: true},
    started_on: {presence: true}
  }
});

export default Job;
