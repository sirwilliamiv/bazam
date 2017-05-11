// Ionic Starter App

// bazam.module is a global place for creating, registering and retrieving bazam modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
const bazam = angular.module('bazam', ['ionic'])  //'starter.controllers', 'starter.services'

bazam.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

bazam.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses bazamUI Router which uses the concept of states
  // Learn more here: https://github.com/bazam-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('login', {
    url: '/',
    // abstract: true,
    templateUrl: 'templates/login.html',
    controller: 'userCtrl'

  })

  // Each tab has its own nav history stack:

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'userCtrl'


  })

  .state('bazam', {
      url: '/bazam',
      templateUrl: 'templates/call.html',
      controller: 'callCtrl'


    })
    .state('result', {
      url: '/result',
      templateUrl: 'templates/result.html',
      controller: 'resultCtrl'



    })
  //   .state('all', {
  //   url: '/all',
  //   templateUrl: 'templates/listSongs.html',
  //   controller: 'allSongsCtrl',
  //   //resolve: //function to load all songs before load

  // })

  .state('notFound', {
    url: '/notFound',
    templateUrl: 'templates/notFound.html',
    controller: 'controllers/notFoundCtrl.js'

  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
