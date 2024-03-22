## START SERVER
For start the server use
`node server.js`

---


# Show All Tasks

Get All of tasks that we have created

**URL** : `/tasks` ` 

**Example** : `localhost:3000/tasks`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

Show all the data of tasks 

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

---


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

---

# CREATE TASKS

Allow User to create their tasks.

**URL** : `/tasks`

**Example** : `localhost:3000/tasks`

**Method** : `POST`

**BODY PARAMS**
|  Params  |      Type     |
|----------|:-------------:|
| title    |      string   |

**Example on Postman**

<img width="899" alt="Screenshot 2567-03-22 at 23 04 58" src="https://github.com/plzoenr/todolist/assets/7520843/666c82fc-da68-401f-85d0-07f58d0f6f33">

**Data examples**

```json
{
    "title": "My third to do list"
}
```

## Success Responses

**Condition** : Data provided is valid

**Code** : `200 OK`

```json
{
  "message": "Task updated successfully"
}
```

## Error Response

**Condition** : If provided data is null

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "message": "No title provided"
}
```

---

# Update Tasks

Allow User to update their tasks.

**URL** : `/tasks/:id`

**Example** : `localhost:3000/tasks/1`

**Method** : `PUT`

**BODY PARAMS**
|  Params  |      Type     |
|----------|:-------------:|
| title    |      string   |

**Example on Postman**

<img width="859" alt="Screenshot 2567-03-22 at 22 58 29" src="https://github.com/plzoenr/todolist/assets/7520843/04e9f068-7580-4204-ba19-6d28765510e0">

**Data examples**

```json
{
    "title": "test update the title"
}
```

## Success Responses

**Condition** : Data provided is not null and found the record

**Code** : `200 OK`

```json
{
  "message": "Task updated successfully"
}
```

## Error Response

**Condition** : If provided data is null

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "message": "No title provided"
}
```

**Condition** : If tasks provide :id not found

**Code** : `404 NOT FOUND`

**Content example** :

```json
{
  "message": "Task not found"
}
```

---

## DELETE TASKS

Allow User to delete their tasks.

**URL** : `/tasks/:id`

**Example** : `localhost:3000/tasks/1`

**Method** : `DELETE`

**BODY PARAMS**
|  Params  |      Type     |
|----------|:-------------:|
| title    |      string   |

**Example on Postman**
<img width="887" alt="Screenshot 2567-03-22 at 23 01 14" src="https://github.com/plzoenr/todolist/assets/7520843/c128366d-22d4-4277-8b71-8d6ab79510cd">

## Success Responses

**Condition** : Data provided is not null and found the record

**Code** : `200 OK`

```json
{
  "message": "Task deleted successfully"
}
```

## Error Response

**Condition** : If tasks not found

**Code** : `404 NOT FOUND`

**Content example** :

```json
{
  "message": "Task not found"
}
```




