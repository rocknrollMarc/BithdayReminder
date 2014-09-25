'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

  .directive('myFacebook', [function() {
    return{
      link: function(scope, element, attributes) {
        scope.username = "Marc Bluemner"
      },
      template: "Welcome {{ username }}"
    }
  }])
