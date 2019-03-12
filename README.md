#Use separate terminals for start server and client

on the fist console go to server folder
#npm install
#npm run server

#json-server will work on 3000 port
#http://localhost:3000

on the second console go to client folder
#npm install
#npm run start

#Angularjs app will work on 3001 port
#http://localhost:3001


Examples
server:

will return 8 most popular documents

ExampleRoute: http://localhost:3000/api/documents/popular
Method: GET
Response: [ {
"id": 6,
"popular": 10,
"category": "News", "headline": "Journals happend",
"text": "Lorem icommodo."
}
]

will return you paginated search data 

ExampleRoute: http://localhost:3000/api/search?category=Taxes&_page=1&_limit=8
or Taxes, Topics, Journals
Method: GET
Response: [ {
"id": 21,
"popular": 2,
"category": "Taxes",
"headline": "Taxes happend",
"text": "Lorem ipsum neque commodo."
}
]