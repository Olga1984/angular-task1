import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-translate';
import 'angular-sanitize';
import 'angular-translate-loader-static-files';

angular.module('core', ['templates', 'ui.router', 'searchPage', 'shared', 'home', 'pascalprecht.translate', 'translate', 'ngSanitize']);
angular.module('home', []);
angular.module('searchPage', []);
angular.module('shared', []);
angular.module('translate', []);
