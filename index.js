const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req,res) =>{
    res.status(200).json({
        message: 'welcome to project support',
    });

});

app.listen(port,(req,res)=>{
    console.log(`server is live on ${port}`);
});