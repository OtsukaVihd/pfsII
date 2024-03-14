import express from 'express'
import usuarioRoute from './routes/usuariosRoute.js'
import perfilRoute from './routes/perfilRoute.js'
import loginRoute from './routes/loginRoute.js'
import imovelRoute from './routes/imovelRoute.js'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const outputJson = require('./swagger_output.json');

import swaggerUi from 'swagger-ui-express'


const app = express();

app.use(express.json());

//pag de documentação
app.use('/docs', swaggerUi.serve, swaggerUi.setup(outputJson));

app.use('/usuarios', usuarioRoute);
app.use('/perfil', perfilRoute);
app.use('/login', loginRoute);
app.use('/imovel',
    /*  #swagger.tags = ['Imóvel']
        #swagger.security = [{
        apiKeyAuth: ['PFSII']
    }]
    */
imovelRoute);

app.listen(5000, function() {
    console.log("backend em execução");
})