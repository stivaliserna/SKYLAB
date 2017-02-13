/* global angular */
angular.module('movieApp').config([
  '$routeProvider',
  routerConfig
])

function routerConfig ($routeProvider) {
  $routeProvider
   .when('/popular', {
     templateUrl: 'app/popular/popular.tpl.html',
     controller: 'PopularController'
   })
   .when('/upcoming', {
     templateUrl: 'app/upcoming/upcoming.tpl.html',
     controller: 'UpcomingController'
   })
   .when('/top-rated', {
     templateUrl: 'app/top-rated/top-rated.tpl.html',
     controller: 'TopRatedController'
   })
   .when('/now-playing', {
     templateUrl: 'app/now-playing/now-playing.tpl.html',
     controller: 'NowPlayingController'
   })
   .otherwise('/popular')
}
