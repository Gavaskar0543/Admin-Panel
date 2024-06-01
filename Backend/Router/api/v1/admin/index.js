const express = require('express');
const router = express.Router();
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
router.post('/new/employee',adminController.addNewEmployee);
/*delet employee */
router.delete('/delete-employee',adminController.delteUser);
/**update employee */
router.put('/update-employee',adminController.updateEmployee);
/*search employee */
router.get('/search-employee',adminController.searchEmployee);
/*get all employee */
router.get('/get-all-employee',adminController.getAllEmployee);

module.exports = router;
/* */

module.exports = router;