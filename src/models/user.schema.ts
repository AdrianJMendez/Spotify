import mongoose from "mongoose";
import { User } from "./user.model";
import { playlists } from "./content.model";

const schema = new mongoose.Schema<User>({
    codigoUsuario: Number,
    nombreUsuario: String,
    playlists: Array<playlists>
});


export const UserSchema = mongoose.model('usuarios',schema);// enlace