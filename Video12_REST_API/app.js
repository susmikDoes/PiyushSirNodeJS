/*
    RESTFull API
1. Server Client Architecture
2. Server Side Rendering - done by google, youtube and is fast(sendig html rendered file)
3. Sending JSON file - Client side rendering
4. Always respect all http methods - GET, POST, PUT, PATCH, DELETE

5. res.send() res.json() res.render()




*/

const express = require('express');

const app = express();
const port = 3000;

app.get('/',async(req,res) => {
    //res.json(https://api.github.com/users/suun034);
    const response = await fetch('https://api.github.com/users/octocat'); // replace with any username
        const data = await response.json();
        res.json(data);
});

app.listen(port,() => {
    console.log(`Running os http://localhost:${port}/`);
})
