For start the server use
`node server.js`



You can access the task list by
`localhost:3000/tasks` with METHOD `GET`



For each task can be access by send `:id` to url
`localhost:3000/tasks/1` with METHOD `GET`



For create use
`localhost:3000/tasks` with METHOD `POST`
body params require
`title` as string



for update reference by `:id` to url
`localhost:3000/tasks/1` with METHOD `PUT`
body params require
`title` as string



for delete reference by `:id` to url
`localhost:3000/tasks/1` with METHOD `DELETE`
