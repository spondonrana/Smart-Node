const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world, Looks at glance! Now I can code with node !!");
});

const users = [
  { id: 1, name: "shahanaj", email: "shanu@gmail.com", phone: "01766036102" },
  { id: 2, name: "Sabana", email: "shanu@gmail.com", phone: "01766036103" },
  { id: 3, name: "Khadija", email: "shanu@gmail.com", phone: "01766036104" },
  { id: 4, name: "Amina", email: "shanu@gmail.com", phone: "01766036105" },
  { id: 5, name: "Nurjahan", email: "shanu@gmail.com", phone: "01766036162" },
  { id: 6, name: "Santi", email: "shanu@gmail.com", phone: "01766036182" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((u) =>
      u.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  }
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("Request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "orange"]);
});

app.get("/fruits/mango/nagra", (req, res) => {
  res.send("Razsahi Nangra Mango");
});
app.listen(port, () => {
  console.log("Looks at glance!", port);
});
