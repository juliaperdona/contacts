import express from 'express';
import morgan from 'morgan';
import cors from 'cors'; 
import rotaContatos from './routes/contatoRoutes.js'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 


app.use('/contatos', rotaContatos)

app.use((req, res, next) => {
    const erro = new Error("Não encontrado");
    erro.status = 404; 
    next(erro);
});


app.use((error, req, res, next) => {
    console.error("Erro interno no servidor:", error);

    res.status(error.status || 500);

    return res.send({
        erro: {
            mensagem: error.message || 'Erro interno desconhecido no servidor'
        }
    });
});

export default app;