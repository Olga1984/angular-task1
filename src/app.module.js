import angular from 'angular';
import '@uirouter/angularjs';

angular.module('core', ['templates', 'ui.router', 'searchPage', 'shared', 'home']);
angular.module('home', []);
angular.module('searchPage', []);
angular.module('shared', []);
