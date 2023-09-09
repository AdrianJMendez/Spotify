import mongoose from "mongoose";

export interface canciones{
    nombreCancion: string;
    artista: string;
    album: string;
}

export interface cancionesAlbum{
    nombreCancion: string;
    duracion: string;
}

export interface playlists{
    tituloPlaylist : string;
    canciones: Array<canciones>;
}

export interface albumes{
    nombreAlbum : string;
    caratulaAlbum: string;
    canciones: Array<cancionesAlbum>;
}