import express from 'express';
import { obtenerAlbums, obtenerArtista, obtenerArtistas } from '../controllers/artist.controller';

const router = express.Router();
// Controlador de artistas
//     obtener artistas

router.get('/:id',obtenerArtista);

router.get('',obtenerArtistas);

//         obtener musica y albums de los artistas

router.get('/:id/albums',obtenerAlbums)



export default router;