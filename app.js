import express from 'express'
import morgan from 'morgan';
import rotaContatos from './routes/contatoRoutes.js'

const app = express();
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Acess-Control-Allow-Header',
        'Origin,, X-Requested-With, Accept ,Content-Type');

    if(req.method === 'OPTIONS'){
        res.header(Acess-Control-Allow-Methods, 'PATCH, POST, DELETE, GET');
        return res.status(200).send({});
    } 
    next();
})

app.use('/contatos', rotaContatos)

app.use((req, res, next) => {
    const erro = new Error("Não encontrado")
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro:{
            mensagem: error.message
        }
    })
})

export default app;