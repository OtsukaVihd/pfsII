import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'API',
        description: 'Programação FullStack 2',
    },
    host: 'localhost:5000'
};

const outputFile = './swagger_output.json';
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);


