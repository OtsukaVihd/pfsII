import express from 'express'
import usuarioRoute from './routes/usuariosRoute.js'

const app = express();

app.use(express.json());

app.use('/usuarios', usuarioRoute);

app.listen(5000, function() {
    console.log("backend em execução");
})
//