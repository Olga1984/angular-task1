import angular from 'angular';
import de from './data/de.json';
import en from './data/en.json';
import es from './data/es.json';

// export default angular.module('translate')
//     .config(['$translateProvider', ($translateProvider) => {
//         $translateProvider.preferredLanguage('en');
//         $translateProvider.registerAvailableLanguageKeys(['en', 'de', 'es'], {
//             'en-*': 'en',
//             'de-*': 'de',
//             'es-*': 'es',
//         });
//         $translateProvider.useStaticFilesLoader({
//             prefix: 'data/',
//             suffix: '.json',
//         });
//         $translateProvider.useSanitizeValueStrategy('sanitize');
//     }]);
export default angular.module('translate')
    .config(['$translateProvider', ($translateProvider) => {
        $translateProvider.translations('en', en);
        $translateProvider.translations('de', de);
        $translateProvider.translations('es', es);
        $translateProvider.preferredLanguage('de');
    }]);