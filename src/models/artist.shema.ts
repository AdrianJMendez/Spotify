
import mongoose from "mongoose";
import { Artist } from "./artist.model";
import { albumes } from "./content.model";


const schema = new mongoose.Schema<Artist>({
    codigoArtista: Number,
    nombreArtista: String,
    playlists: Array<albumes>
})

export const ArtistSchema = mongoose.model('artistas',schema);// enlace