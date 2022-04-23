const express = require('express');
const port = 8000 ;
const app = express();



app.use(express.urlencoded());
// setting up view engine
app.set('view engine' , 'ejs');


app.use('/' , require('./routes'));

app.listen(port , (err)=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log(`connected to the server at http://localhost:${port}`);
})
