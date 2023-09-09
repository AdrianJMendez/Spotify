"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
// Controlador de usuario
// Obtener usuarios
// http://localhost:3000/users/:id
router.get('/:id', user_controller_1.obtenerUsuario);
//obtener todos los usuarios
router.get('', user_controller_1.obtenerUsuarios);
//     obtener playlist del usuario
router.get('/:id/playlists', user_controller_1.obtenerPlaylists);
// controlador de contenido
//         Mostrar canciones de las playlist
//         agregar canciones a playlist
exports.default = router;
