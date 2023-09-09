"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerAlbums = exports.obtenerArtistas = exports.obtenerArtista = void 0;
const artist_shema_1 = require("../models/artist.shema");
const obtenerArtista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield artist_shema_1.ArtistSchema.findById(req.params.id, { nombreArtista: true });
    if (usuario) {
        res.send({ status: true, message: 'Artista obtenido con exito', usuario });
    }
    else
        res.send({ status: false, message: 'Artista no existe', usuario });
    res.end();
});
exports.obtenerArtista = obtenerArtista;
const obtenerArtistas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield artist_shema_1.ArtistSchema.find({}, { _id: 1, codigoArtista: 1, nombreArtista: 1 });
    if (usuarios.length > 0) {
        res.send({ status: true, message: 'Atistas obtenidos con exito', usuarios });
    }
    else {
        res.send({ status: false, message: 'Artistas no existen' });
    }
});
exports.obtenerArtistas = obtenerArtistas;
const obtenerAlbums = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield artist_shema_1.ArtistSchema.findById(req.params.id, { nombreArtista: true, albumes: true });
    if (usuario) {
        res.send({ status: true, message: 'Artista obtenido con exito', usuario });
    }
    else
        res.send({ status: false, message: 'Artista no existe', usuario });
    res.end();
});
exports.obtenerAlbums = obtenerAlbums;
