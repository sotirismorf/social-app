const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a post

app.post("/api/posts", async (req, res) => {
  try {
    const { description } = req.body;
    const newPost = await pool.query(
      "INSERT INTO posts (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newPost.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all post

app.get("/api/posts", async (req, res) => {
  try {
    const allPosts = await pool.query("SELECT * FROM posts");
    res.json(allPosts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a post 

app.get("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM posts WHERE post_id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const { username } = req.body;
    const newPost = await pool.query(
      "INSERT INTO users (username) VALUES($1) RETURNING *",
      [username]
    );
    res.json(newPost.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      id
    ]);

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
