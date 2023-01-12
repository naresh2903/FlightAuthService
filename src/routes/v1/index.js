const express = require('express');
const UserController = require('../../controllers/user-controller');
const {AuthRequestValidator} = require('../../middlewares/index')

const router = express.Router();


router.post('/signup' ,
AuthRequestValidator.validateUserAuth,
 UserController.create
 );
router.post('/signin' ,
AuthRequestValidator.validateUserAuth,
UserController.signIn
);

// this is used to authenticated whether user is authenticated or not
// for using other microservices 

router.get(
    'isAuthenticated',
    UserController.isAthenticated
) 


// to check whether api is working with authentication or it could be micro service also

router.get('/dummy', (req , res)=>{
    return res.status(200).json({
        message:'OK'
    })
})


module.exports = router;