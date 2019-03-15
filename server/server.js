const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(jsonServer.rewriter({
    "/api/documents/popular": "/documents?_sort=popular&_order=desc&_limit=8",
    "/api/documents?search=:search": "/documents?q=:search",
    "/api/documents?search=:search&filterId=:filter": "/documents?q=:search&filterId=:filter",
    "/api/documents?search=:search&filtersCount": "/documents?q=:search",
    "/api/*": "/$1"
}));
server.use(router);

router.render = function (req, res) {
    if (req._parsedOriginalUrl.query.includes('filtersCount')) {
        const filters = [];
        const cache = {};
        res.locals.data.forEach((elem) => {
            const {filterId} = elem;
            if (cache[filterId]) {
                cache[filterId].push(elem.filterId);
            } else {
                cache[filterId] = [elem.filterId];
            }
        });
        Object.keys(cache).forEach((key) => {
            filters.push({
                filterId: key,
                filtersQuantity: cache[key].length,
            });
        });
        res.jsonp({
            filters: filters
        })
    } else {
        res.jsonp(res.locals.data)
    }
};

server.listen(3000, () => {
    console.log('JSON Server is running')
});
