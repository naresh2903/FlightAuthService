const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const apiroutes =  require('./routes/index')

const {PORT}= require('./config/serverConfig');


const prepareAndStartServer =  ()=>{
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api' , apiroutes);




app.listen(PORT ,()=>{
    console.log(`server is running fine on port ${PORT}`)
})

}

prepareAndStartServer();