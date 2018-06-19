import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Validator from '../mixins/object-validator';

/**
 * Education, training, and certifications.
 * @class
 * @augments ember-data/model
 * @augments ember-model-validator/mixins/object-validator
 * @property name {String} required
 * @property credential {String} required
 * @property organization {Organization} required
 * @property completed_on {Date}
 * @property updated_at {Date}
 * @property created_at {Date}
 */
const Education = Model.extend(Validator, {

  // =attributes

  name: attr('string'),
  credential: attr('string'),
  description: attr('string'),
  organization: belongsTo('organization'),
  completed_on: attr('date'),
  updated_at: attr('date'),
  created_at: attr('date'),

  // =validations

  /**
   * @memberof Education
   * @see {@link https://github.com/esbanarango/ember-model-validator}
   */
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  validations: {
    name: {presence: true},
    credential: {presence: true}
  }
});

export default Education;
