/* global angular */
angular
  .module('movieApp')
  .controller('TopRatedController', [
    '$scope',
    '$log',
    'MovieService',
    TopRatedController
  ])

function TopRatedController ($scope, $log, MovieService) {
  $scope.movies = MovieService.get({
    type: 'top_rated'
  })
}
