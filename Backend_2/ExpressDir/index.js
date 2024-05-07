const express = require("express");
const app = express(); //app is an object 

// console.dir(app);

let port = 3000; //8080

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

//Handling requests
app.use((req, res) =>{
    console.log("request received");
   // res.send("this is a basic response");

    let note = "<h1>Sending Requests</h1><ul>lists of food items<li>icecream</li><li>samosa</li></ul>";
    res.send(note); //html code as response
});