import express from 'express';
import userRouter from './routers/user.router';
import userArtist from './routers/artist.router';
import cors from 'cors';

//Inicializacios
const app = express();
import './utilis/database'

//settings
app.set('port', process.env.PORT || 8000); //process.env.PORT puerte de la nube



//midleweares
app.use(express.json()); //para que el server reconozca jsons
app.use(express.urlencoded({extended: false}));//// Configura 


//rutas
app.use(cors());
app.use('/users', userRouter);
app.use('/artist', userArtist);

//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`se levantó el servidor en el puerto: ${app.get('port')}`);
});