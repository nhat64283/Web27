const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./public/ask2.html'));
});
app.get('/about',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./public/ask3.html'));
});
app.listen(3000,(error) => {
    if(error){
        console.log(error);
    } else{
        console.log('Server listen on port...');
    }
});