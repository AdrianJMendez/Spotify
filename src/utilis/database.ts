import mongoose from "mongoose";
const Uri = 'mongodb+srv://esusjadrian:Tareaspoo@tareas.gpbnejv.mongodb.net/Tarea3?retryWrites=true&w=majority';

mongoose.connect(Uri)
.then(db => console.log('conectado a mongo'))
.catch(err => console.log(err));