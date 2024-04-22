const User = require("../models/user");

const getUsers = (request, response) => {
  //Get all users
  return User.find({})
    .then((data) => {
      response.status(200).send(data);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id)
    .then((user) => {
      if (!user) {
        response.sendStatus(404);
      } else {
        response.status(200).send(user);
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const createUser = (request, response) => {
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const updateUser = (request, response) => {
  //Update user
  const { user_id } = request.params;
  return User.findByIdAndUpdate(user_id, { ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const deleteUser = (request, response) => {
  //Delete user
  const { user_id } = request.params;
  return User.findByIdAndDelete(user_id, { ...request.body })
    .then((user) => {
      if (!user) {
        response.sendStatus(404);
      } else {
        response.status(201).send(user);
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};