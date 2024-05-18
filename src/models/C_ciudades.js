import mongoose from "mongoose";

const ciudadesSchema = mongoose.Schema({
    ciu_codigo: { type: Number, required: true, trim: true, unique: true },
    ciu_nombre: { type: String, default: null, trim: true },
    ciu_cod_dian: { type: String, default: null, trim: true }, 
    cod_departamento: { type: Number, default: null, trim: true }
});

const Ciudades = mongoose.model('c_ciudades', ciudadesSchema);
export default Ciudades;