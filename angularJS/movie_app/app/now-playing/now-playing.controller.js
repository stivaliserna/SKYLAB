/* global angular */
angular
  .module('movieApp')
  .controller('NowPlayingController', [
    '$scope',
    '$log',
    'MovieService',
    NowPlayingController
  ])

function NowPlayingController ($scope, $log, MovieService) {
  $scope.movies = MovieService.get({
    type: 'now_playing'
  })
}
