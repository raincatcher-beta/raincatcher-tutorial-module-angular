var angular = require('angular');
angular.module('wfm.users').directive('userList', function($templateCache) {

  return {
    restrict: 'E',
    template: $templateCache.get('wfm-template/user-template.tpl.html'),
    controller: 'UserController'
  };
});
