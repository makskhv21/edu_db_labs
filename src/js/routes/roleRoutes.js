'use strict';

const roleController = require('../controllers/roleController');

const roleRoutes = async (fastify, options) => {
    const { 
        addRole, 
        addGrant, 
        deleteRoleById } = roleController;
    fastify.post('/roles', addRole);
    fastify.put('/roles/:id/:grantId', addGrant);
    fastify.delete('/roles/:id', deleteRoleById);
}

module.exports = roleRoutes;