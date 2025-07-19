/*
REST API - JSON

GET /users - List all users

GET /users/1 - Get the user with ID 1
GET /users/2 - Get the user with ID 2

POST /users - Create new user

PATCH /users/1 - Edit the user with ID 1

DELETE /users/1 - Delete the User with ID 1
*/

const express = require('express')
const users = require("./MOCK_DATA")
const fs = require('fs')


const app = express()
const port = 3000

//middleware used
app.use(express.urlencoded({extended:false}))

//Client side rendering
app.get('/api/users', (req, res) => {
  return res.json(users)
})

//Server side rendering
app.get('/users', (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
  `;
  res.send(html);
});

//Dynamic path parameters
//:id means it is a variable
app.get('/api/users/:id', (req, res) => {
  const id =  Number(req.params.id);
  const user = users.find((user) => user.id == id);
  const name = user.first_name;
  return res.send(name);
})

/*
// Create new user using POST for the id
app.post('/api/users/:id', (req, res) => {
  return res.json(data)
})

//Edit the user with the id
app.patch('/api/users/:id', (req, res) => {
  return res.json(data)
})

//Delete the user with the id
app.patch('/api/users/:id', (req, res) => {
  return res.json(data)
})
*/

//getting info on one user
app.route("/api/users/:id").get((req, res) => {
  const id =  Number(req.params.id);
  const user = users.find((user) => user.id == id);
  const name = user.first_name;
  return res.send(name);
}).patch((req, res) => {
  //edit user with id
  return res.json({status:"Pending"})
}).delete((req, res) => {
  //delete user with id
  const userId = Number(req.params.id);
  
});


//creating a new user - we have to use middleware
app.post("/api/users",(req,res) => {
  const body = req.body;
  //console.log("Body : ",body)
  users.push({...body,id: users.length+1}); 
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
  if (err) {
    return res.status(500).json({ error: "Failed to write to file." });
  }
    return res.json({ status: "Data has been added", userId: users.length });
});

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
