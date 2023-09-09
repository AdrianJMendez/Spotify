import { Request, Response } from 'express';
import { UserSchema } from '../models/user.schema';

export const obtenerUsuario = async (req: Request, res: Response) => {
  const usuario = await UserSchema.findById(req.params.id, { nombreUsuario: true });
    if (usuario) {
      res.send({status: true, message: 'Usuario obtenido con exito', usuario});
    }
    else 
      res.send({status: false, message: 'Usuario no existe', usuario});
    res.end();
}

export const obtenerUsuarios = async (req: Request, res: Response) => {
  const usuarios = await UserSchema.find({}, { _id: 1, codigoUsuario: 1, nombreUsuario: 1 });

  if (usuarios.length > 0) {
    res.send({ status: true, message: 'Usuarios obtenidos con exito', usuarios });
  } else {
    res.send({ status: false, message: 'Usuarios no existen' });
  }
};




export const obtenerPlaylists = async (req: Request, res: Response) => {
  const usuario = await UserSchema.findById(req.params.id, { nombreUsuario: true, playlists: true });
    console.log(req.params.id);
    if (usuario) {
      res.send({status: true, message: 'Usuario obtenido con exito', usuario});
    }
    else 
      res.send({status: false, message: 'Usuario no existe', usuario});
    res.end();
}