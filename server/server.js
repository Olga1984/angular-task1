const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');


const data = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf8' }));

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(jsonServer.rewriter({
    "/api/documents/popular": "/documents?_sort=popular&_order=desc&_limit=8",
    "/api/documents?search=:search": "/documents?q=:search",
    "/api/documents?search=:search&filterId=:filter": "/documents?q=:search&filterId=:filter",
    "/api/*": "/$1"
}));


server.use((req, res, next) => {
    const { documents } = data;
    const { q: searchQuery, filtersCount } = req.query;
    if (!filtersCount) {
        return next();
    }
    const cache = Object.create(null);
    const regex = new RegExp(searchQuery, 'i');
    documents.forEach((elem) => {
        const { filterId, headline, text } = elem;
        if (!regex.test(headline) && !regex.test(text)) {
            return;
        }
        if (cache[filterId]) {
            cache[filterId] += 1;
        } else {
            cache[filterId] = 1;
        }
    });
    res.jsonp(cache);
})

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running')
});
