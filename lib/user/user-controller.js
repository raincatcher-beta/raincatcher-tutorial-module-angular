var angular = require('angular');
angular.module('wfm.users').controller('UserController', ['$scope', 'modrain', '$timeout', UserController]);

/**
 * Controller for managing the User directive.
 *
 * This is responsible for emitting and subscribing to events related to users.
 *
 * @param $scope
 * @param modrain
 * @param $timeout
 *
 * @constructor
 */
function UserController($scope, modrain, $timeout) {

  //Setting initial users list.
  $scope.users = [];

  //Initial state for adding a new user.
  //The fields will be bound in the directive.
  $scope.newUser = {};

  $scope.loading = true;

  //Observing the `list` handler for the `user` namespace.
  //Here, we want to update the list of displayed users whenever they have been listed.
  modrain.user.observe('list').subscribe(function(users) {
    console.log("users list", users);
    $timeout(function() {
      $scope.err = null;
      $scope.loading = false;
      $scope.users = users;
    });
  });

  //Observing the `create` handler for the `user` namespace
  modrain.user.observe('create').subscribe(function(createdUser) {
    console.log("A user was created ", createdUser);
  });


  $scope.addUser = function addUser() {
    $scope.loading = true;

    //When the user has been created, we then re-list the users from the server.
    modrain.user.create($scope.newUser).then(modrain.user.list).catch(function(err) {
      $timeout(function() {
        $scope.err = err;
      })
    });
  };

  //Calling user list
  modrain.user.list();
}

module.exports = 'UserController';