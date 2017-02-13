/* global angular */
angular
  .module('movieApp')
  .controller('PopularController', [
    '$scope',
    '$log',
    'MovieService',
    PopularController
  ])

function PopularController ($scope, $log, MovieService) {
  $scope.movies = MovieService.get({
    type: 'popular'
  })
}
