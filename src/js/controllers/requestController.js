'use strict';

const Request = require('../models/requestModel');

const generateHandler = (handler) => async (req, reply) => {
    try {
        const result = await handler(req);
        if (result) {
            reply.send(result);
        } else {
            reply.send({ message: 'Request operation successful...' });
        }
    } catch (err) {
        reply.code(500).send({ error: err.message });
    }
};

const addRequest = generateHandler(async (req) => {
    await Request.add(req.body, 'User_id');
    return { message: 'Request has been successfully added.' };
});

const getMediaByRequestId = generateHandler(async (req) => {
    const result = await Request.getRequestAndMediaById(req.params.id);
    return result;
});

const deleteRequestById = generateHandler(async (req) => {
    await Request.deleteById(req.params.id);
    return { message: "Request deletion successful." };
});

module.exports = {
    addRequest,
    getMediaByRequestId,
    deleteRequestById
};

