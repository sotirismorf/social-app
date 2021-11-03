const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create an author
app.post("/api/user", async (req, res) => {
  try {
    const { username } = req.body;
    const newPost = await pool.query(
      "INSERT INTO author (authorid,username) VALUES (DEFAULT,$1) RETURNING *",
      [username]
    );

    res.json(newPost.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all authors
app.get("/api/user", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM author");
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//create a post

app.post("/api/posts", async (req, res) => {
	try {
		const { authorid , body } = req.body;
    const newPost = await pool.query(
      "INSERT INTO posts (id,parent_post,authorid,body) VALUES(DEFAULT,NULL,$1,$2) RETURNING *",
      [authorid,body]
    );

    res.json(newPost.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all posts

app.get("/api/posts", async (req, res) => {
  try {
    const allPosts = await pool.query("select posts.id,posts.body,posts.authorid,author.username from posts left join author on posts.authorid = author.authorid");
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
//select posts.id,posts.body,posts.authorid,author.username from posts left join author  on posts.authorid = author.authorid

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
