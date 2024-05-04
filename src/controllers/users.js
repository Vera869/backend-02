// const getUsers = (request, response) => {
//    response.status(200);
//    response.send("Get all users");
// };

// const getUserById = (request, response) => {
//    console.log("get user by id");
//    const { user_id } = request.params;
//    response.status(200);
//    response.send(`User with id: ${user_id}`);
// };

// const createUser = (request, response) => {
//    console.log("create user");
//    response.status(201);
//    response.send(request.body);
// };

// const updateUser = (request, response) => {
//    console.log("update user");
//    response.status(200);
//    response.send(request.body);
// };

// const deleteUser = (request, response) => {
//    console.log("delete user");
//    const { user_id } = request.params;
//    response.status(200);
//    response.send(`user with id: ${user_id} is delete`);
// };

// module.exports = {
//    getUsers,
//    getUserById,
//    createUser,
//    updateUser,
//    deleteUser
// }
const User = require('../models/user')

const getUsers = (req, res) => {
   User.find({})
       .then(user => {
           res.status(200).send(user);
       })
       .catch(e => {
           res.status(500).send(e.message);
       });
}

// Получим пользователя по ID
const getUserById = (req, res) => {
//    const { user_id } = req.params;
//    User.findById(user_id)
//        .then(user => {
//            res.status(200).send(user);
//        })
//        .catch(e => {
//            res.status(500).send(e.message);
//        });
 }

// Создаем пользователя
const createUser = (req, res) => {
   const data = req.body;
   User.create(data)
       .then(user => {
           res.status(201).send(user);
       })
       .catch(e => {
           res.status(500).send(e.message);
       });
}

// Обновляем пользователя
const updateUser = (req, res) => {
   // const { user_id } = req.params;
   // const data = req.body;
   // User.findByIdAndUpdate(user_id, data, { new: true, runValidators: true })
   //     .then(user => {
   //         res.status(200).send(user);
   //     })
   //     .catch(e => {
   //         res.status(500).send(e.message);
   //     });
}

// Удаляем пользователя
const deleteUser = (req, res) => {
   // const { user_id } = req.params;
   // User.findByIdAndDelete(user_id)
   //     .then(user => {
   //         res.status(200).send("Done");
   //     })
   //     .catch(e => {
   //         res.status(500).send(e.message);
   //     });
}

module.exports = {
 getUsers,
 getUserById,
 createUser,
 updateUser,
 deleteUser
};