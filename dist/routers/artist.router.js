"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const artist_controller_1 = require("../controllers/artist.controller");
const router = express_1.default.Router();
// Controlador de artistas
//     obtener artistas
router.get('/:id', artist_controller_1.obtenerArtista);
router.get('', artist_controller_1.obtenerArtistas);
//         obtener musica y albums de los artistas
router.get('/:id/albums', artist_controller_1.obtenerAlbums);
exports.default = router;
