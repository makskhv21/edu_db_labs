'use strict';

const userController = require('../controllers/userController');

const userRoutes = async (fastify, options) => {
    const {
        getAllUsers,
        getUserById,
        addUser,
        deleteUserById,
        updateUserRoleById,
    } = userController;
    fastify.get('/users', getAllUsers);
    fastify.get('/users/:id', getUserById);
    fastify.post('/users', addUser);
    fastify.delete('/users/:id', deleteUserById);
    fastify.put('/users/:id/role/:roleId', updateUserRoleById);
}

module.exports = userRoutes;