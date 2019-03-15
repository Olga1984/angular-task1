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
Response: [
{
      "id": 1,
      "filterId": 2,
      "popular": 1,
      "headline": "Topics happend",
      "text": "Hello ipsum dolor sit news, consectet vel tortor aliquam eleifend. Sed non velit rhoncus quam volutpat gravida tincidunt nec lectus. Nullam tristique erat a lacus sollicitudin, commodo tempus elit viverra. Vestibulum imperdiet neque nec tortor mollis, at scelerisque nisi varius. Vivamus ligula magna, porta et felis non, convallis facilisis est. Morbi ut nunc libero. Vivamus posuere auctor sem, quis molestie massa laoreet vitae. Donec nec libero vitae turpis aliquet scelerisque ac ac dui. Praesent metus turpis, elementum eu purus faucibus, imperdiet pellentesque nisi. Duis maximus libero dictum mi vulputate, in iaculis neque commodo."
    },
]
will return necessary group of filters

http://localhost:3000/api/filters?group=advertisment
http://localhost:3000/api/filters?group=science

Method: GET
Response:
  {
    "group": "science",
    "values": [
      {
        "id": 4,
        "name": "World"
      },
      {
        "id": 5,
        "name": "Tech"
      },
      {
        "id": 6,
        "name": "Finance"
      }
    ]
  }
]
will return necessary count(common) of filters for requested search world

Method: GET
{
  "filters": [
    {
      "filterId": "5",
      "filtersQuantity": 2
    },
    {
      "filterId": "6",
      "filtersQuantity": 4
    },
    {
      "filterId": "7",
      "filtersQuantity": 1
    }
  ]
}

will return you search data (query is keys independent -> NEWS news News)

http://localhost:3000/api/documents?search=Jou
http://localhost:3000/api/documents?search=news&filterId=3
Method: GET
Response: [
{
    "id": 5,
    "filterId": 3,
    "popular": 2,
    "headline": "Journals happend",
    "text": "Lorem Hello ipsum dolor sit News, consect icies ipsum vel tortor aliquam eleifend. Sed non velit rhoncus quam volutpat gravida tincidunt nec lectus. Nullam tristique erat a lacus sollicitudin, commodo tempus elit viverra. Vestibulum imperdiet neque nec tortor mollis, at scelerisque nisi varius. Vivamus ligula magna, porta et felis non, convallis facilisis est. Morbi ut nunc libero. Vivamus posuere auctor sem, quis molestie massa laoreet vitae. Donec nec libero vitae turpis aliquet scelerisque ac ac dui. Praesent metus turpis, elementum eu purus faucibus, imperdiet pellentesque nisi. Duis maximus libero dictum mi vulputate, in iaculis neque commodo."
  },
    ]
