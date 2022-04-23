const express = require('express');
const port =  process.env.PORT ||8000  ;
const app = express();


// Express Body Parser
app.use(express.urlencoded());

// setting up view engine
app.set('view engine' , 'ejs');

// defining routes (following MVC structure)
app.use('/' , require('./routes'));

// run express server
app.listen(port , (err)=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log(`connected to the server at http://localhost:${port}`);
})
