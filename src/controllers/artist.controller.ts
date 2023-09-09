import { Request, Response } from 'express';
import { ArtistSchema } from '../models/artist.shema';

export const obtenerArtista = async (req: Request, res: Response) => {
    const usuario = await ArtistSchema.findById(req.params.id, { nombreArtista: true });
    if (usuario) {
      res.send({status: true, message: 'Artista obtenido con exito', usuario});
    }
    else 
      res.send({status: false, message: 'Artista no existe', usuario});
    res.end();
};

export const obtenerArtistas = async (req: Request, res: Response) => {
  const usuarios = await ArtistSchema.find({}, { _id: 1, codigoArtista: 1, nombreArtista: 1 });

  if (usuarios.length > 0) {
    res.send({ status: true, message: 'Atistas obtenidos con exito', usuarios });
  } else {
    res.send({ status: false, message: 'Artistas no existen' });
  }
};

export const obtenerAlbums = async (req: Request, res: Response) => {
    const usuario = await ArtistSchema.findById(req.params.id, { nombreArtista: true, albumes: true });
    if (usuario) {
      res.send({status: true, message: 'Artista obtenido con exito', usuario});
    }
    else 
      res.send({status: false, message: 'Artista no existe', usuario});
    res.end();
};