/* global angular */
angular.module('movieApp').service('MovieService', [
  '$resource',
  MovieService
])

function MovieService ($resource) {
  return $resource(
    'https://api.themoviedb.org/3/movie/:type',
    {
      api_key: '2025fcafbc56e1300c8b86afc23743a9'
    }
  )
}
