import mongoose from "mongoose";

const centroCostosSchema = mongoose.Schema({
    ccc_codigo: { type: String, required: true, trim: true, unique: true },
    ccc_nombre: { type: String, default: null, trim: true },
    ccc_ciudad: { type: Number, default: null, trim: true }, 
    ccc_departamento: { type: Number, default: null, trim: true },
    ccc_pais:  { type:Number, default:null, trim: true },
    ccc_cod_contable: { type: String, default: null, trim: true },
    cod_tercero: { type: Number, default: null, trim: true },
    porc_comision: { type: Number, default: null, trim: true },
    cod_retefuente: { type: Number, default: null, trim: true },
});

const CentroCostos = mongoose.model('c_centro_costos', centroCostosSchema);
export default CentroCostos;