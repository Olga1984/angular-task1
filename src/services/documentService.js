import angular from 'angular';
import { mockDocuments } from '../assets/documents';

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
            const { category } = elem;
            // console.log(category);
            if (cache[category]) {
                cache[category].push(elem.value);
            } else {
                cache[category] = [elem.value];
            }
        });
        for (const key in cache) {
            filteredArticlesCount = filteredArticlesCount + cache[key].length;
            filteredArticles.push({
                filteredCategoryName: key,
                filteredGroup: cache[key],
            });
        }
        console.log(filteredArticlesCount);
    }
    getFilteredArticles();
    return {
        documents,
        getDocuments,
        filteredArticles,
        getFilteredArticles,
        filteredArticlesCount,
    };
}]);

export default documentModule;
