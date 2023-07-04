/* eslint-disable import/no-extraneous-dependencies */
const Hapi = require('@hapi/hapi');

const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: '127.0.0.1',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  // console.log(`server is running at ${server.info.uri}`);
};

init();
