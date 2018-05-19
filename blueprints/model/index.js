var stringUtils = require('ember-cli-string-utils');

/* eslint-env node */
module.exports = {
  description: 'Generates a model.',

  locals(options) {
    return {
      className: stringUtils.capitalize(options.entity.name)
    };
  }
};
