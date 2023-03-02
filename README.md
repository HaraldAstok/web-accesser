# WEB PAGE ACCESSIBILITY CHECKER

## Requirements

- Node 16 (follow `.nvmrc`, or just run `nvm use`)
- NPM 8+

## Development

- Install dependencies `npm i`
- To run service in dev environment, use `npm start`

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.

## API

### GET http://localhost:3001/urls - returns all urls that are currently checked

Response:

```
{
    "urls": [
        "http://www.err.ee/",
        "http://www.facebook132133.com/",
        "http://www.google.com/"
    ]
}
```

### POST http://localhost:3001/urls - add urls to be checked

| Property | Type   | Details                | Required |
| -------- | ------ | ---------------------- | -------- |
| `url`    | string | url that will be added | yes      |

### DELETE http://localhost:3001/urls/ - deletes url from list that are checked

| Property | Type   | Details                  | Required |
| -------- | ------ | ------------------------ | -------- |
| `url`    | string | url that will be removed | yes      |

### GET http://localhost:3001/history/all - returns all saved history

Response:

```
{
    "http://www.err.ee/": [ 1, 1, 1, 1 ],
    "http://www.facebook132133.com/": [ 0, 1, 1, 0 ],
    "http://www.google.com/": [ 1, 1, 1, 1 ]
}
```

### GET http://localhost:3001/history - return selected url histories

| Property | Type             | Details                   | Required |
| -------- | ---------------- | ------------------------- | -------- |
| `urls`   | array of strings | urls that will be checked | yes      |
