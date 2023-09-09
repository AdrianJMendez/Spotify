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
exports.obtenerPlaylists = exports.obtenerUsuarios = exports.obtenerUsuario = void 0;
const user_schema_1 = require("../models/user.schema");
const obtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield user_schema_1.UserSchema.findById(req.params.id, { nombreUsuario: true });
    if (usuario) {
        res.send({ status: true, message: 'Usuario obtenido con exito', usuario });
    }
    else
        res.send({ status: false, message: 'Usuario no existe', usuario });
    res.end();
});
exports.obtenerUsuario = obtenerUsuario;
const obtenerUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield user_schema_1.UserSchema.find({}, { _id: 1, codigoUsuario: 1, nombreUsuario: 1 });
    if (usuarios.length > 0) {
        res.send({ status: true, message: 'Usuarios obtenidos con exito', usuarios });
    }
    else {
        res.send({ status: false, message: 'Usuarios no existen' });
    }
});
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerPlaylists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield user_schema_1.UserSchema.findById(req.params.id, { nombreUsuario: true, playlists: true });
    console.log(req.params.id);
    if (usuario) {
        res.send({ status: true, message: 'Usuario obtenido con exito', usuario });
    }
    else
        res.send({ status: false, message: 'Usuario no existe', usuario });
    res.end();
});
exports.obtenerPlaylists = obtenerPlaylists;
