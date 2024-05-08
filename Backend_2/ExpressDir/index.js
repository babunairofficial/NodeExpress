const express = require("express");
const app = express(); //app is an object 

// console.dir(app);

let port = 3000; //8080

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

//Handling requests
// app.use((req, res) =>{
//     console.log("request received");
//    // res.send("this is a basic response");

//     let note = "<h1>Sending Requests</h1><ul>lists of food items<li>icecream</li><li>samosa</li></ul>";
//     res.send(note); //html code as response
// });

//routing
app.get("/", (req, res) =>{
    res.send("Hello I am root");
});

// app.get("/search", (req, res) =>{
//     res.send("you contacted search path");
// });

// app.get("/help", (req, res) =>{
//     res.send("you contacted help path");
// });

// app.get("*", (req, res) =>{ //wildcard - for standard path
//     res.send("this path does not exist");
// });

// app.post("/", (req, res) =>{
//     res.send("you contacted a post request to root");
//     //check in hoppscotch
// });

app.get("/:username/:id", (req, res) =>{
    let{username, id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
    //check in hoppscotch
});

//query string
app.get("/search", (req, res) =>{
    console.log(req.query);
    res.send("no results");
});