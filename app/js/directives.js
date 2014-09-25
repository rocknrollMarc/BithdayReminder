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
      link: function(scope, element, attrs) {

        // Looad the SDK asynchronously
        (function(d) {
          var js, id = 'facebook-jssdk',
          ref = d.getElementsByTagName('script')[0];
          if (d.getElementById(id)) {
            return;
          }
          js = d.createElement('script');
          js.id = id;
          js.async = true;
          js.src = "//connect.facebook.net/en_US/all.js";
          ref.parentNode.insertBefore(js, ref);
        }(document));

        // Initialize FB
        window.fbAsyncInit = function() {
          FB.init({
            appId: '651432224964508',
            status: true, // ccheck login status
            cookie: true, // enable cookies to access the session
            xfbml: false // parse XFBML
          });

          // Check FB Status
          FB.getLoginStatus(function(response) {
            console.log(response);
          });
        };
        scope.username = "Marc Bluemner"
      },
      template: "Welcome {{ username }}"
    };
  }
  ]);
