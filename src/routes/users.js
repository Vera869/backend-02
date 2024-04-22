const router = require('express').Router();
// const loggerTwo = require('../middleweare/loggerTwo');

// const {
//    getUsers,
//    getUserById,
//    createUser,
//    updateUser,
//    deleteUser
// } = require('../controllers/users')
// router.use(loggerTwo);
// router.get('/users', getUsers);
// router.get('/users/:user_id', getUserById);
// router.post('/users', createUser);
// router.patch('/users/:user_id', updateUser);
// router.delete('/users/:user_id', deleteUser);
const {getUsers, getUserById, createUser, updateUser, deleteUser} = require('../controllers/users')

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:user_id', getUserById);
router.patch('/users/:user_id', updateUser);
router.delete('/users/:user_id', deleteUser);

module.exports = router;
