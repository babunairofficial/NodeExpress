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
});