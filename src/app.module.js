import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-translate';

angular.module('core', ['templates', 'ui.router', 'searchPage', 'shared', 'home', 'translate']);
angular.module('home', []);
angular.module('searchPage', []);
angular.module('shared', []);
angular.module('translate', ['pascalprecht.translate']);
