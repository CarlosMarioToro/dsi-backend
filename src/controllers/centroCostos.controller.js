import CentroCostos from "../models/C_centro_costos.js";

const getCentroCostos = async (req, res) => {
    const centroCostos = await CentroCostos.find().exec();
    res.json(centroCostos);
};

export {getCentroCostos};