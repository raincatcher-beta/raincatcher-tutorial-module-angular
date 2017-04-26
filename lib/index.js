var angular = require('angular');

//Setting up an angular module that has a dependency on the raincatcher-mediator angular module. (https://github.com/feedhenry-raincatcher/raincatcher-mediator)
//This mediator is responsible for handling all of the topic publish and subscriptions.
angular.module('wfm.users', ['wfm.core.modrain']);

//Loading HTML templates built by the raincatcher-template-build module. (https://github.com/feedhenry-raincatcher/raincatcher-template-build).
//This means all of the templates are cached.
require('../dist');

//Adding the UserController
require('./user/user-controller');

//Adding the UserDirective
require('./user/user-directive');


module.exports = 'wfm.users';