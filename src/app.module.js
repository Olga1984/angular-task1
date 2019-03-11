import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-translate';
import 'angular-sanitize';
import 'angular-translate-loader-static-files';
import 'angular-translate-storage-local';
import 'angular-translate-storage-cookie';
import 'angular-cookies';
import 'angular-translate-handler-log';

angular.module('core', ['templates',
    'ui.router',
    'searchPage',
    'shared',
    'home',
    'ngCookies',
    'pascalprecht.translate',
    'translate',
    'ngSanitize',
]);
angular.module('home', []);
angular.module('searchPage', []);
angular.module('shared', []);
angular.module('translate', []);
