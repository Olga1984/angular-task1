import angular from 'angular';

export default angular.module('article')
    .directive('ngArticle', function() {
        return {
            restrict: 'E',
            templateUrl: 'article.html',            
        }
    });
