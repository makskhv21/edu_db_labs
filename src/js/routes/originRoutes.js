'use strict';

const originController = require('../controllers/originController');

const originRoutes = async (fastify, options) => {
    const {
        addOrigin, 
        deleteOriginById} = originController;
    fastify.post('/origins', addOrigin);
    fastify.delete('/origins/:id', deleteOriginById);
}

module.exports = originRoutes;