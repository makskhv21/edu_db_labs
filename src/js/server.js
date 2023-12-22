'use strict';

const fastify = require('fastify')({ logger: true });

const mediaRoutes = require('./routes/mediaRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');
const originRoutes = require('./routes/originRoutes');
const requestRoutes = require('./routes/requestRoutes');

fastify.register(mediaRoutes, { prefix: '/media' });
fastify.register(userRoutes, { prefix: '/user' });
fastify.register(roleRoutes, { prefix: '/role' });
fastify.register(originRoutes, { prefix: '/origin' });
fastify.register(requestRoutes, { prefix: '/request' });

const startServer = async () => {
    try {
        const port = 3004;
        await fastify.listen({ port });
        console.log(`Server is running on ${fastify.server.address().port}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

startServer();
