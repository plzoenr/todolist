const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const fs = require("fs")
const bodyParser = require("body-parser");
const {json} = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// index
app.get("/tasks", async (req, res) => {
  fs.readFile("data.json", 'utf-8', function (err, data) {
    if (err) {
      return res.status(500).json({error: 'Internal Server Error'});
    }

    try {
      const json_data = JSON.parse(data);
      res.json(json_data.tasks.data);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).json({error: 'Internal Server Error'});
    }
  });
});

// show
app.get("/tasks/:id", async (req, res) => {
  const task_id = parseInt(req.params.id);
  if (isNaN(task_id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  fs.readFile("data.json", 'utf-8', function (err, data) {
    if (err) {
      return res.status(500).json({error: 'Internal Server Error'});
    }

    try {
      if (req.params && req.params.id) {
        const json_data = JSON.parse(data);
        const current_task_index = json_data.tasks.data.findIndex(task => task.id === task_id);

        if (current_task_index === -1) {
          return res.status(404).json({ message: "Task not found" });
        }

        const current_task = json_data.tasks.data[current_task_index];

        res.json(current_task);
      } else {
        res.status(500).json({message: "No id provided"});
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).json({error: 'Internal Server Error'});
    }
  });
});

// create
app.post('/tasks', (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({error: 'Internal Server Error'});
    }

    try {
      const json_data = JSON.parse(data);

      // Find the next available index
      let newIndex = json_data.tasks.index + 1;
      while (json_data.tasks.data.some(task => task && task.id === newIndex)) {
        newIndex++;
      }

      if (req.body && req.body.title) {
        let title = req.body.title;

        // Remove null entries from the data array
        json_data.tasks.data = json_data.tasks.data.filter(task => task !== null);

        // Add the new task
        json_data.tasks.data[newIndex] = {
          id: newIndex,
          title: title
        };

        // Update the index
        json_data.tasks.index = newIndex;

        json_data.tasks.data = json_data.tasks.data.filter(task => task !== null);

        fs.writeFileSync('data.json', JSON.stringify(json_data)); // Convert object to JSON string
        res.status(200).json({message: "Task Created"});

      } else {
        res.status(400).json({message: "No title provided"});
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).json({error: 'Internal Server Error'});
    }
  });
});

// update
app.put('/tasks/:id', (req, res) => {
  const task_id = parseInt(req.params.id);
  if (isNaN(task_id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    try {
      const json_data = JSON.parse(data);
      const current_task_index = json_data.tasks.data.findIndex(task => task.id === task_id);

      if (current_task_index === -1) {
        return res.status(404).json({ message: "Task not found" });
      }

      if (req.body && req.body.title) {
        json_data.tasks.data[current_task_index].title = req.body.title;

        fs.writeFileSync('data.json', JSON.stringify(json_data)); // Convert object to JSON string
        res.status(200).json({ message: "Task updated successfully" });
      } else {
        res.status(400).json({ message: "No title provided" });
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

// delete
app.delete('/tasks/:id', (req, res) => {
  const task_id = parseInt(req.params.id);
  if (isNaN(task_id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    try {
      const json_data = JSON.parse(data);
      const current_task = json_data.tasks.data.findIndex(task => task.id === task_id);


      if (current_task === -1) {
        return res.status(404).json({message: "Task not found"});
      }

      json_data.tasks.data.splice(current_task, 1);

      if (json_data.tasks.data.length == 0) {
        json_data.tasks.index = -1
      }

      fs.writeFileSync('data.json', JSON.stringify(json_data)); // Convert object to JSON string
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});


const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Listening on ${port}`));
