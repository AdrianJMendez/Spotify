import mongoose from "mongoose";
import { playlists } from "./content.model";


export interface User{
    _id?: mongoose.Types.ObjectId;
    codigoUsuario: number;
    nombreUsuario: string;
    playlists: Array<playlists>;
}