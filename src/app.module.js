import angular from 'angular';
import 'angular-route';

angular.module('core', ['templates', 'ngRoute', 'searchPage', 'shared', 'home']);
angular.module('home', []);
angular.module('searchPage', []);
angular.module('shared', []);
