const express = require('express')
const app = express();

const {PORT}= require('./config/serverConfig');


const prepareAndStartServer =  ()=>{
app.listen(PORT ,()=>{
    console.log(`server is running fine on port ${PORT}`)
})

}

prepareAndStartServer();