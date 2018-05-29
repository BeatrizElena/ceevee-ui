import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Validator from '../mixins/object-validator';

/**
 * A skill and competency rating.
 * @class
 * @augments ember-data/model
 * @augments ember-model-validator/mixins/object-validator
 * @property name {String}
 * @property competency {Number}
 * @property updated_at {Date}
 * @property created_at {Date}
 */
const Skill = Model.extend(Validator, {

  // =attributes

  name: attr('string'),
  competency: attr('number'),
  updated_at: attr('date'),
  created_at: attr('date'),

  // =validations

  /**
   * @memberof Skill
   * @see {@link https://github.com/esbanarango/ember-model-validator}
   */
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  validations: {
    name: {
      presence: true
    },
    competency: {
      presence: true,
      numericality: {
        onlyInteger: true,
        greaterThanOrEqualTo: 0,
        lessThanOrEqualTo: 10
      }
    }
  }
});

export default Skill;
