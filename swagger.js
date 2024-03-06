import swaggerAutogen from 'swagger-autogen';
import LoginModel from './models/loginModel.js';
import UsuarioModel from './models/usuarioModel.js';
import PerfilModel from './models/perfilModel.js';

const doc = {
    info: {
        title: 'API',
        description: 'Programação FullStack 2',
    },
    host: 'localhost:5000',
    components: {
        schemas: {
            loginModel: new LoginModel('teste@teste.com', '123').toJSON(),
            usuarioModel: new UsuarioModel(999, "Fulano", "teste@teste.com.br", "123abc", new PerfilModel(1, 'Administrador')).toJSON()
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