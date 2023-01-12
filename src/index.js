const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const apiroutes =  require('./routes/index')

const {PORT}= require('./config/serverConfig');


const prepareAndStartServer =  ()=>{
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api' , apiroutes);

const  UserService = require('./services/user-service')


app.listen(PORT ,()=>{
    console.log(`server is running fine on port ${PORT}`)

    // const service = new UserService();
    // const newToken = service.createToken({email:'narendra@admin.com', id: 1});

   // console.log("new token is " , newToken);
})

}

prepareAndStartServer();