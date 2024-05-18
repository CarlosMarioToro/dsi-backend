import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    cod_usuario: { type: Number, required: true, trim: true, unique: true },
    log_usuario: { type: String, default: null, trim: true },
    pwd_usuario: { type: String, default: null, trim: true }, 
    nom_usuario: { type: String, default: null, trim: true },
    ape_usuario:  { type:String, default:null, trim: true },
    permiso: { type: String, default: null, trim: true },
    permiso_nivel_medio: { type: String, default: null, trim: true },
    permiso_nivel_alto: { type: String, default: null, trim: true },
});

const Usuario = mongoose.model('c_usuarios', usuarioSchema);
export default Usuario;