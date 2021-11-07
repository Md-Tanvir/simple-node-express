const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("HEllo from the node second time, very excited to learn");
});

const users = [
  { id: 0, name: "Mike", email: "tanvir@gmail.com", phone: "017823823823" },
  { id: 1, name: "Tanvir", email: "tanvir@gmail.com", phone: "017823823823" },
  { id: 2, name: "Hunter", email: "tanvir@gmail.com", phone: "017823823823" },
  { id: 3, name: "Ahliya", email: "tanvir@gmail.com", phone: "017823823823" },
  { id: 4, name: "Kajol", email: "tanvir@gmail.com", phone: "017823823823" },
  { id: 5,name: "Nuruz",email: "tanvir@gmail.com",phone: "017823823823",},
  { id: 6, name: "Alex", email: "tanvir@gmail.com", phone: "017823823823" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  //   use query parameter
  if (search) {
    const searchResult = users.filter((user) => user.name.includes(search));
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.Method
app.post('/users', (req,res)=>{
  const newUser= req.body;
  newUser.id=users.length;

  users.push(newUser)
  console.log('hitting the post',req.body);
  // res.send(JSON.stringify(newUser))
  res.json(newUser)
})

// dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Get some fazli aaam");
});

app.listen(port, () => {
  console.log(`Example app listening`, port);
});
