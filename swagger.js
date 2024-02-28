import swaggerAutogen from 'swagger-autogen';
import LoginModel from './models/loginModel.js';

const doc = {
    info: {
        title: 'API',
        description: 'Programação FullStack 2',
    },
    host: 'localhost:5000',
    components: {
        schemas: {
            loginModel: new LoginModel('teste@teste.com', '123').toJSON()
        },
        securitySchemes: {
            apiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'chaveapi',
                description: 'Chave de acesso para a utilização da API'
            }
        }
    }
};

const outputFile = './swagger_output.json';
const routes = ['./server.js'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, routes, doc).then( async() => {
    await import('./server.js');
});