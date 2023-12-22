'use strict';

const mediaController = require('../controllers/mediaController');

const mediaRoutes = async (fastify, options) => {
    const { 
      addMedia, 
      searchMedia, 
      deleteMediaById } = mediaController
    fastify.post('/', addMedia);
    fastify.get('/find/:keyword', searchMedia);
    fastify.delete('/remove/:id', deleteMediaById);
};

module.exports = mediaRoutes;
