const express = require("express");
const app = express();

app.use(express.urlencoded({ express: false }));

app.get("/", (req, res) => {
  res.send(`
    <h2>What color is the sky in a clear and sunny day?</h2>
    <form action="/answer" method="POST">
      <input type="text" name="skyColor" autocomplete="off"/>
      <input type="submit" value="Submit Answer"/>
    </form>
  `);
});

app.post("/answer", (req, res) => {
  if (req.body.skyColor.toLowerCase() == "blue") {
    res.send(`
      <p>Congrats! That is the correct answer.</p>
      <a href="/">Back to the homepage</a>
    `);
  } else {
    res.send(`
      <p>Sorry, that is incorrect :(</p>
      <a href="/">Back to the homepage</a>
    `);
  }
});

app.get("/answer", (req, res) => {
  res.send(`
    <p>Are you lost? There is nothing to see here!</p>
  `);
});

app.listen(3000);
