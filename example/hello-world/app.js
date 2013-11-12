angular.module('products', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.
      when('/', {controller: ProductCtrl, template: 'index.html'});
  });

function ProductCtrl($scope, $db, $role, $me, $fangValidation) {
  $scope.$me = $me;
  $scope.$role = $role;
  $scope.products = $db.collection('products');

  $fangValidation($scope, 'name')
    .isString('name must be a string')
    .maxLength(10, 'max length for a name is 10 characters')
    ;
}

// runs on the server only
angular.module('server', ['server'], function($server, $db, $role) {
  $server.listen(3000);

  for(
    var i = 0, max = 100;
    i < max;
    i++
  ) {
    $db.collection('products').insert({name: 'my product ' + id});
  }

  $role('?', function($db, $allow, $deny) {
    $deny('all', $db);
    $allow('reading', $db.products);
  });

  $role('admin', function($db, $allow) {
    $allow('editing', $db.collection('products'));
  });
});
