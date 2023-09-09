"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const artist_router_1 = __importDefault(require("./routers/artist.router"));
const cors_1 = __importDefault(require("cors"));
//Inicializacios
const app = (0, express_1.default)();
require("./utilis/database");
//settings
app.set('port', process.env.PORT || 8000); //process.env.PORT puerte de la nube
//midleweares
app.use(express_1.default.json()); //para que el server reconozca jsons
app.use(express_1.default.urlencoded({ extended: false })); //// Configura 
//rutas
app.use((0, cors_1.default)());
app.use('/users', user_router_1.default);
app.use('/artist', artist_router_1.default);
//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`se levantó el servidor en el puerto: ${app.get('port')}`);
});
