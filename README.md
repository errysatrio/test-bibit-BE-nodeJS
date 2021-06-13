# test-bibit-BE-nodeJS
this is a solution documentation for the test given to me

## 1. create a query
the task was to make from tables users like this:
<!-- Tables -->
| id      | UserName   | Parent   |
| --- | --------- |----------- |
| 1 | Ali | 2 |
| 2 | Budi | 0 |
| 3 | Cecep | 1 |

become like this 


| id      | UserName   | Parent   |
| --- | --------- |----------- |
| 1 | Ali | Budi |
| 2 | Budi | Null  |
| 3 | Cecep | Ali |

my solution using WHERE Statement, where it select a UserName where it's id are the same number with Parent

##2. create a server##
the task was to make some endpoints to find one movie's details and to be able search movie based on the criteria given through query params.

this is the query which can be sent:

O => Optional
M => Mandatory


|query params      | opt/mandatory   | description   |
| ------------------ | ----- |----------- |
| imdb_id | M | A valid IMDb ID (e.g. tt1285016) |
| movie_title | M | Movie title to search for. |
| movie_type | O | Type of result to return. |
| year | O | Year of release. |
| plot | O | Return short or full plot. |
| data_type | O | The data type to return. |
| page | O | Page number to return. |

###please note that in /api/detail either you send imdb_id or movie_title###
###please note that in /api/search you movie_title###

endpoint api/detail?imdb_id=tt0096895 responses: 

- when success:

#### status: 200
```
{
    "code": "success get movie(s) search",
    "message": "success get movie(s) search",
    "data": {
        "Title": "Batman",
        "Year": "1989",
        "Rated": "PG-13",
        "Released": "23 Jun 1989",
        "Runtime": "126 min",
        "Genre": "Action, Adventure",
        "Director": "Tim Burton",
        "Writer": "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)",
        "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
        "Plot": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
        "Language": "English, French, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 8 wins & 26 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "71%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "7.5",
        "imdbVotes": "343,300",
        "imdbID": "tt0096895",
        "Type": "movie",
        "DVD": "24 Jul 2014",
        "BoxOffice": "$251,348,343",
        "Production": "Warner Brothers, Guber-Peters Company, PolyGram Filmed Entertainment",
        "Website": "N/A",
        "Response": "True"
    }
}
```

- when failed, e.g query send imdb_id=tt13124123
#### status:400
```
{
    "code": "fail get movie(s) search",
    "message": "fail get movie(s) search",
    "data": "Incorrect IMDb ID."
}
```

### endpoint /api/search

### status: 200
```
query sends: movie_title=batman
{
    "code": "success get movie(s) search",
    "message": "success get movie(s) search",
    "data": {
        "Title": "Batman",
        "Year": "1989",
        "Rated": "PG-13",
        "Released": "23 Jun 1989",
        "Runtime": "126 min",
        "Genre": "Action, Adventure",
        "Director": "Tim Burton",
        "Writer": "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)",
        "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
        "Plot": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
        "Language": "English, French, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 8 wins & 26 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "71%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "7.5",
        "imdbVotes": "343,300",
        "imdbID": "tt0096895",
        "Type": "movie",
        "DVD": "24 Jul 2014",
        "BoxOffice": "$251,348,343",
        "Production": "Warner Brothers, Guber-Peters Company, PolyGram Filmed Entertainment",
        "Website": "N/A",
        "Response": "True"
    }
}
```

## status: 400
```
query sends: movie_title=batasdmanasd *random string*

{
    "code": "fail get movie(s) search",
    "message": "fail get movie(s) search",
    "data": "Movie not found!"
}
```

## 3. refactoring codes
- adding variable named result with data type is string, this will be the final result if bracket are found then add the word to result, if none then return result which is an empty string
- changing some if conditions to make sure user not send it wrong and function can work without interrupted by errors

## 4.logic test

create additional 2 function to keep it DRY, first function to sort, and the other are split.

the key behind the solution that i can give, are to split the word and then restucture(sort) it so we can know if the words are anagrams or not.

- in the first loop we restructured word based on sorting methods, and the join them,
- in second loop we compare it, if the aords are same then, remove it by 1 using splice function, and decrement the index so we dont missed the other words 
