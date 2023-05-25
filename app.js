const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send("Welcome to my app");
});

app.listen(3000,(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is up and running");
    }
});
