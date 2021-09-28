MetaCare CC
=======

### Movies (for retrieving to database)
```source-json
{
  "message": "Data Retrieved Successfully"
}
```

### Movies (Retrieve all Movies)
```source-json
{
    "data": [
        {
            "title": "A New Hope",
            "release_date": "1977-05-25",
            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            "comments_count": 1
        },
        {
            "title": "The Empire Strikes Back",
            "release_date": "1980-05-17",
            "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
            "comments_count": 0
        },
    ...
```


### Other status codes:
401 for Unauthorized requests, when a request requires authentication but it isn't provided

404 for Not found requests, when a resource can't be found to fulfill the request


Endpoints:
----------

### Movies (for retrieving to database):

`GET /movies/retrieve`

### Movies:
`GET /movies`


### Comments:
`POST /comments/:movieId/add`
Example request body:

```source-json
{
    "content": "Basically a lot of a simple comment"
}
```

### List Comments for a Movie
`GET /comments/:movieId/`


### Retrieve All Characters (About 80, run only once to avoid duplication)
`GET /characters/retrieve-ext`

### List Characters Using 
`GET   /characters?sortBy=height&order=ASC`



## Staging Area
Here all relevant staging would be setup.