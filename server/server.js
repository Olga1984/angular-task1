const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');


let data = null;
fs.readFile('./db.json', { encoding: 'utf8' }, (err, content) => {
    if (err) {
        throw err;
    }
    data = JSON.parse(content);
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(jsonServer.rewriter({
    "/api/documents/popular": "/documents?_sort=popular&_order=desc&_limit=8",
    "/api/*": "/$1"
}));


server.use('/documents', (req, res, next) => {
    const { documents } = data;
    const { search, filterId, filtersCount } = req.query;
    if (!search) {
        return next();
    }
    const result = {
        documents: [],
    };
    const regex = new RegExp(search, 'i');
    const filtersArr = Array.isArray(filterId)
    ? filterId.map(Number)
    : [Number(filterId)];
    if (filtersCount === 'true') {
        result.filtersCount = {};
    }
    documents.forEach((document) => {
        const { filterId: documentFilter, headline, text } = document;
        if (!regex.test(headline) && !regex.test(text)) {
            return;
        }
        if (filtersCount === 'true') {
            result.filtersCount[documentFilter] = result.filtersCount[documentFilter] + 1 || 1;
        }
        if (filterId && !filtersArr.includes(documentFilter)) {
            return;
        }
        result.documents.push(document);
    });
    if (result.documents.length === 0) {
        if (filtersCount === 'true') {
            result.filtersCount = null;
        }
        res.status(404);
    }
    res.jsonp(result);
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running')
});
