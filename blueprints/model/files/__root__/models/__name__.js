import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Validator from '../mixins/object-validator';

/**
 * Model description goes here.
 * @class
 * @augments ember-data/model
 * @augments ember-model-validator/mixins/object-validator
 * @property example {String} property description
 */
const <%= className %> = Model.extend(Validator, {

  // =attributes

  //example: attr('string'),
  updated_at: attr('date'),
  created_at: attr('date'),

  // =validations

  /**
   * @memberof <%= className %>
   * @see {@link https://github.com/esbanarango/ember-model-validator}
   */
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  validations: {
    //example: {presence: true}
  }
});

export default <%= className %>;
