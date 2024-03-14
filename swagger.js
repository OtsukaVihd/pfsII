import swaggerAutogen from 'swagger-autogen';
import LoginModel from './models/loginModel.js';
import UsuarioModel from './models/usuarioModel.js';
import PerfilModel from './models/perfilModel.js';
import ImovelModel from './models/imovelModel.js';

const doc = {
    info: {
        title: 'API',
        description: 'Programação FullStack 2',
    },
    host: 'localhost:5000',
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'chaveapi',
            description: 'Chave de acesso para a utilização da API'
        },
    },
    components: {
        schemas: {
            loginModel: new LoginModel('teste@teste.com', '123').toJSON(),
            usuarioModel: new UsuarioModel(999, "Fulano", "teste@teste.com.br", "123abc", new PerfilModel(1, 'Administrador')).toJSON(),
            imovelModel: new ImovelModel(0, 'Casa com 3 quartos e 2 banheiros', 1005.0, '12345-678', 'Rua dos bobos, nº 0', 'Bairro 1', 'Cidade 1', 'SP', 'S').toJSON(),
        },
    }
};


const outputFile = './swagger_output.json';
const routes = ['./server.js'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, routes, doc).then( async() => {
    await import('./server.js');
});