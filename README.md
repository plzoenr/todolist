## START SERVER
For start the server use
`node server.js`

# Show All Tasks

Get All of tasks that we have created

**URL** : `/tasks` ` 

**Example** : `localhost:3000/tasks`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

For a User with ID 1234 on the local database where that User has saved an
email address and name information.

```json
[
  {
    "id": 0,
    "title": "My first post todolist"
  },
  {
    "id": 1,
    "title": "My second post todolist"
  }
]
```

# Show Specific Tasks

Get the detail of specific tasks

**URL** : `/tasks/:id` ` 

**Example** : `localhost:3000/tasks/1`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

Show data for task id 1 

```json
  {
    "id": 1,
    "title": "My second post todolist"
  }
```

## Not found Response

**Code** : `404 Not Found`

**Content examples**

```json
  {
    "message":"Task not found"
  }
```


## CREATE
For create use
`localhost:3000/tasks` with METHOD `POST`
body params require
`title` as string


## UPDATE
for update reference by `:id` to url
`localhost:3000/tasks/1` with METHOD `PUT`
body params require
`title` as string


## DELETE
for delete reference by `:id` to url
`localhost:3000/tasks/1` with METHOD `DELETE`
