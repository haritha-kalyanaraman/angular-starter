(function() {
  'use strict';

  angular.module('app.starter')
    .directive('post', post);

  function post($injector, $interval, app.starter) {
    return {
      replace: true,
      scope: {
        post: '='
      },
      controller: ['$scope', 'postService', function($scope, postService) {
        $scope.like = function(post) {
          // write function to like posts
          post.likes++;
          postService.like(post);
        }
      }],
      templateUrl: 'post.html'
  };
}());
