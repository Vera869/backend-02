const getUsers = (request, response) => {
   response.status(200);
   response.send("Get all users");
};

const getUserById = (request, response) => {
   console.log("get user by id");
   const { user_id } = request.params;
   response.status(200);
   response.send(`User with id: ${user_id}`);
};

const createUser = (request, response) => {
   console.log("create user");
   response.status(201);
   response.send(request.body);
};

const updateUser = (request, response) => {
   console.log("update user");
   response.status(200);
   response.send(request.body);
};

const deleteUser = (request, response) => {
   console.log("delete user");
   const { user_id } = request.params;
   response.status(200);
   response.send(`user with id: ${user_id} is delete`);
};

module.exports = {
   getUsers,
   getUserById,
   createUser,
   updateUser,
   deleteUser
}