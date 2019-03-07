import angular from 'angular';

export default angular.module('translate')
    .controller('TranslateController', ['$translate', function ($translate) {
        // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?page=1&tab=votes#tab-top
        this.getParameterByName = (name, url) => {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
                const results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        };
        // If a parameter is present several times (?locale=de-DE&foo=ipsum), you will get the first value (de-DE)
        // http://localhost:3000/?en-US
        $translate.use(this.getParameterByName('locale'));

        this.changeLanguage = (key) => {
            $translate.use(key);
        };
    }]);
