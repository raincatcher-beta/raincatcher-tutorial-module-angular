var ngModule;
try {
  ngModule = angular.module('wfm.users');
} catch (e) {
  ngModule = angular.module('wfm.users', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/user-template.tpl.html',
    '<div ng-if="loading && !err">\n' +
    '  <h1>Loading User List...</h1>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-if="err">\n' +
    '  <h2>Error {{err}}</h2>\n' +
    '</div>\n' +
    '\n' +
    '<div class="user_list" ng-if="!loading">\n' +
    '  <h1>List Of Users</h1>\n' +
    '\n' +
    '  <ul>\n' +
    '    <li ng-repeat="user in users">\n' +
    '      {{ user.name }}\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '\n' +
    '<div class="user_form">\n' +
    '  <h1>Add A User</h1>\n' +
    '\n' +
    '  <label for="inputName" class="">Name</label>\n' +
    '  <input type="text"\n' +
    '         name="inputName"\n' +
    '         ng-model="newUser.name"\n' +
    '         ng-required="true"\n' +
    '  />\n' +
    '\n' +
    '  <label for="inputAddress" class="">Address</label>\n' +
    '  <input type="text"\n' +
    '         name="inputAddress"\n' +
    '         ng-model="newUser.address"\n' +
    '         ng-required="true"\n' +
    '  />\n' +
    '  <button ng-click="addUser()">Add New User</button>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);
