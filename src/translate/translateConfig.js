import angular from 'angular';
import de from '../assets/data/de.json';
import en from '../assets/data/en.json';
import es from '../assets/data/es.json';

export default angular.module('translate')
    .config(['$translateProvider', ($translateProvider) => {
        $translateProvider.preferredLanguage('en');
        $translateProvider.useMissingTranslationHandlerLog();
        $translateProvider.translations('en', en);
        $translateProvider.translations('de', de);
        $translateProvider.translations('es', es);
        $translateProvider.useCookieStorage();
        $translateProvider.useLocalStorage();
        $translateProvider.registerAvailableLanguageKeys(['en', 'de', 'es'], {
            'en-*': 'en',
            'de-*': 'de',
            'es-*': 'es',
        });
        $translateProvider.useSanitizeValueStrategy('sanitize');
    }]);
