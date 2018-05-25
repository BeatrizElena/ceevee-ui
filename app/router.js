import EmberRouter from '@ember/routing/router';
import config from './config/environment';

/**
 * @class
 * @augments @ember/routing/router
 */
const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
});

export default Router;
