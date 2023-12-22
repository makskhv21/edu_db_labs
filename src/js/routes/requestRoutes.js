'use strict';

const requestController = require('../controllers/requestController');

const requestRoutes = async (fastify, options) => {
    const { 
        addRequest, 
        getMediaByRequestId, 
        deleteRequestById} = requestController
    fastify.post('/requests', addRequest);
    fastify.get('/requests/:id', getMediaByRequestId);
    fastify.delete('/requests/remove/:id', deleteRequestById);
};

module.exports = requestRoutes;