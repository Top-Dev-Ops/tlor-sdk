# jeffrey-wilson-sdk
npm package for connecting to The Lord of The Rings API.

## Install
```
npm i jeffrey-wilson-sdk
```

## Available Functions
* getBooks()
* getBook()
* getMovies
* getQuotes
* getChapters
  
You can specify parameters for pagination optionally.

The optional paramaters are limit(number), page(number), offset(number) and sort(string).
* getBooks({ limit: 100, page: 1, offset: 10, sort: 'name:desc' })

## Usage
```
import { getBooks, getChapters } from 'jeffrey-wilson-SDK'
const books = await getBooks();
const chapters = await getChapters();
```
