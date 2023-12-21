const express = require('express');
const UserController = require('../controller/users.js')
const router = express.Router();

router.get('/', UserController.getAll);
router.get('/:userId', UserController.getAllIdentification);
router.get('/:userId/:id', UserController.getIdentification);
router.post('/', UserController.createNewIdentification);
router.put('/:userId/:id', UserController.updateIdentification);
router.delete('/:userId/:id', UserController.deleteIdentification);

module.exports = router;
