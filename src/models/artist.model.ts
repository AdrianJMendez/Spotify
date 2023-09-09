import mongoose from "mongoose";
import { albumes } from "./content.model";


export interface Artist{
    _id?: mongoose.Types.ObjectId;
    codigoArtista: number;
    nombreArtista: string;
    playlists: Array<albumes>;
}