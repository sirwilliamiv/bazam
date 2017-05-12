bazam.controller('userCtrl', function($scope, $window, $location, userFactory ){
  $scope.user = {
    name: "",
    email: "",
    password: ""

  }

  $scope.login = (user) => {

    userFactory.login(user)


  }
  $scope.register = (user) => {

    userFactory.register(user)

  }


})
