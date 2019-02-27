import angular from 'angular';
import * as mockDocuments from '../assets/documents';

const documentModule = angular.module('document');
documentModule.service('documentService', ['$q', function documentService($q) {
    const documents = [];
    const filteredArticles = [];
    let filteredArticlesCount = 0;

    function getDocuments() {
        $q.resolve(mockDocuments).then(updatedDocs => documents.push(...updatedDocs));
    }

    function getFilteredArticles() {
        const cache = {};
        mockDocuments.forEach((elem) => {
            const {
                category
            } = elem;
            if (cache[category]) {
                cache[category].push(elem.value);
            } else {
                cache[category] = [elem.value];
            }
        });
        Object.keys(cache).forEach(function (key) {
            filteredArticlesCount = filteredArticlesCount + cache[key].length;
            filteredArticles.push({
                filteredCategoryName: key,
                filteredGroup: cache[key],
            });
        });
    }
    getFilteredArticles();
    return {
        documents,
        getDocuments,
        filteredArticles,
        filteredArticlesCount,
    };
}]);

export default documentModule;
