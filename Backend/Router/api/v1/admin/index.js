const express = require('express');
const router = express.Router();
const passport = require('passport');
const adminController = require('../../../../Controller/api/v1');

/*route for new admin */
router.post('/new',adminController.addAdmin);
/**route for admin login */
router.post('/create-session',adminController.createSession);
/*route for forgot password */
router.post('/forgot-password',adminController.adminForgotPassword);
/*route for reset password */
router.post('/reset-password',adminController.admiResetPassword);

/**Employee routes */
/**add employee */
router.post('/new/employee',passport.authenticate('jwt',{session:false}),adminController.addNewEmployee);
/*delet employee */
router.delete('/delete-employee',passport.authenticate('jwt',{session:false}) ,adminController.delteUser);
/**update employee */
//router.put('/update-employee', ,adminController.updateEmployee);
/*search employee */
router.get('/search-employee',passport.authenticate( 'jwt',{session:false}) ,adminController.searchEmployee);
/*get all employee */
router.get('/get-all-employee',passport.authenticate('jwt', {session:false}) ,adminController.getAllEmployee);

module.exports = router;
/* */

module.exports = router;