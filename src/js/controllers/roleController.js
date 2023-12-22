'use strict';

const Role = require('../models/roleModel');

const addRole = async (request) => {
    await Role.add(request.body, 'name');
    return { message: "Role has been successfully added."}
};

const addGrant = async (request) => {
    await Role.addGrant(request.params.id, request.params.grantId);
    return {message: "Grant added to role."} 
};

const deleteRoleById = async (request) => {
    await Role.deleteById(request.params.id);
    return {message: "Role deletion successful."}
};

module.exports = { 
    addRole,
    addGrant,
    deleteRoleById
};
