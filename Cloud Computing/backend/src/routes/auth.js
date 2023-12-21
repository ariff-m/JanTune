const express = require('express');
const authController = require('../controller/auth.js')
const router = express.Router();
const verifyToken = require ('../middleware/jwt.js');
const upload = require ('../middleware/multer.js');

router.get('/', verifyToken,authController.getAllUsers);
router.get('/:userId', verifyToken,authController.getUser);
router.post('/', authController.userRegister);
router.post('/login', authController.login);
router.delete('/:userId', verifyToken, authController.deleteUser);
router.put('/update-profile/:userId',verifyToken,upload.single('image'),authController.updateUser);
router.delete('/delete-image/:userId',authController.deleteImage);
router.delete('/delete-phone/:userId', verifyToken,authController.deletePhone);

module.exports = router;
