// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var kids =angular.module('starter', ['ionic','ngCordova'])

kids.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

kids.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('alpha',{
	  url:'/alpha',
	  templateUrl: 'modules/Alphabets/alpha.html',
	  controller: 'AlphaCtrl'
	
	 })
	 .state('number',{
	  url:'/number',
	  templateUrl: 'modules/Numbers/number.html',
	  controller: 'numberCtrl'
	
	 })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'modules/sidemenu/menu.html',
  })

  .state('app.animals', {
    url: '/animals',
    views: {
      'menuContent': {
        templateUrl: 'modules/animals/animals.html',
		 controller: 'MainCtrl'
      }
    }
  })
   .state('app.bodyparts', {
    url: '/bodyparts',
    views: {
      'menuContent': {
        templateUrl: 'modules/Body Parts/bodyparts.html',
		 controller: 'MainCtrl'
      }
    }
  })

  .state('app.fruits', {
      url: '/fruits',
      views: {
        'menuContent': {
          templateUrl: 'modules/Fruits/fruits.html',
		   controller: 'MainCtrl'
        }
      }
    })
    .state('app.homescreen', {
      url: '/homescreen',
      views: {
        'menuContent': {
          templateUrl: 'modules/homescreen/homescreen.html',
		  controller: 'Playlist'
          
        }
      }
    })
    .state('app.colours', {
      url: '/colours',
      views: {
        'menuContent': {
          templateUrl: 'modules/colours/colours.html',
		   controller: 'MainCtrl'
          
        }
      }
    })
	
	.state('app.vegetables', {
      url: '/vegetables',
      views: {
        'menuContent': {
          templateUrl: 'modules/Vegetables/vegetables.html',
		   controller: 'MainCtrl'
          
        }
      }
    });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/homescreen');
});
