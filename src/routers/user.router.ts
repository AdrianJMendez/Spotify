import express from 'express';
import { obtenerPlaylists, obtenerUsuario, obtenerUsuarios } from '../controllers/user.controller';

const router = express.Router();
// Controlador de usuario
// Obtener usuarios
// http://localhost:3000/users/:id
router.get('/:id',obtenerUsuario);

//obtener todos los usuarios
router.get('',obtenerUsuarios);

//     obtener playlist del usuario
router.get('/:id/playlists',obtenerPlaylists);


// controlador de contenido
//         Mostrar canciones de las playlist
//         agregar canciones a playlist




export default router;