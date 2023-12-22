'use strict';

const Media = require('../models/mediaModel');

const handleOperation = async (promise, successMessage, reply) => {
    try {
        const result = await promise;
        reply.send({ message: successMessage });
    } catch (err) {
        reply.code(500).send({ error: err.message });
    }
};

const addMedia = async (request, reply) => {
    await handleOperation(Media.add(request.body, 'url'), 'Media has been successfully added.', reply);
};

const searchMedia = async (request, reply) => {
    const [rows] = await Media.search(request.params.keyword);
    reply.send(rows);
};


const deleteMediaById = async (request, reply) => {
    await handleOperation(Media.deleteById(request.params.id), 'Media deletion successful.', reply);
};

module.exports = {
    addMedia,
    searchMedia,
    deleteMediaById
};
