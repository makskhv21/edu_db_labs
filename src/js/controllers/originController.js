'use strict';

const Origin = require('../models/originModel');

const addOrigin = async (request, reply) => {
    const [rows, fields] = await Origin.add(request.body, 'name');
    reply.send({ message: 'Origin has been successfully added.' });
};

const deleteOriginById = async (request, reply) => {
    await Origin.deleteById(request.params.id);
    return ({ message: 'Origin deletion successful.' });
};

module.exports = { 
    addOrigin,
    deleteOriginById
};