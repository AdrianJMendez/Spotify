import mongoose from "mongoose";
const Uri = '';

mongoose.connect(Uri)
.then(db => console.log('conectado a mongo'))
.catch(err => console.log(err));
