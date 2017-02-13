/* global angular */
angular
  .module('movieApp')
  .controller('UpcomingController', [
    '$scope',
    '$log',
    'MovieService',
    UpcomingController
  ])

function UpcomingController ($scope, $log, MovieService) {
  $scope.movies = MovieService.get({
    type: 'upcoming'
  })
}
