'use strict';

const User = require('../models/userModel');

const getAllUsers = async () => await User.getAll();
const getUserById = async (request, reply) => {
    const [rows] = await User.getByField('id', request.params.id);
    reply.send(rows);
};
const addUser = async (request) => {
    await User.add(request.body, 'email');
    return { message: 'User has been successfully added.' };
};

const deleteUserById = async (request) => {
    await User.deleteById(request.params.id);
    return { message: 'User deletion successful.' };
}

const updateUserRoleById = async (request) => {
    await User.updateUserRoleById(request.params.id, request.params.roleId);
    return { message: 'User role successfully updated.' }
}


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    updateUserRoleById
};
