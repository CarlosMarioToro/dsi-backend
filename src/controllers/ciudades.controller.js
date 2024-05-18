import Ciudades from "../models/C_ciudades.js";

const getCiudades = async (req, res) => {
    // const ciudades = await Ciudades.find();
    const ciudades = await Ciudades.aggregate([
      {
        $lookup: {
          as: "c_departamentos",
          from: "c_departamentos",
          foreignField: "cod_departamento",
          localField: "cod_departamento"
        }
      },
      {
        $project: {
          ciu_codigo: 1,
          ciu_nombre: 1,
          ciu_cod_dian: 1,
          dpt_nombre: "$c_departamentos.dpt_nombre"
        }
      },
      {
        $unwind: "$dpt_nombre"
      },
      {
        $sort:
          {
            ciu_codigo: 1
          }
      }
    ]);
    //   console.log(ciudades);
    res.json(ciudades);
};

export {getCiudades};