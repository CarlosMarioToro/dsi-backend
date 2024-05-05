import { pool } from "mssql";
import conectarDB from "../config/db.js";
import { queries } from "../config/queries.js";

const getUsuarios = async (req, res) => {
    try {
        const pool = await conectarDB();
        const result = await pool.request().query(queries.getAllUsers)
        res.json(result.recordset)        
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

const getUserByLogUsuario = async (req, res) => {
    const {usuario, password} = req.body;

    try {
        const pool = await conectarDB();
        const result = await pool.request()
            .input('log_usuario', usuario)
            .input('pwd_usuario', password)
            .query(queries.getUserByLog_usuario);
        if (result.recordset.length > 0) {
            res.json({ msg: 'Usuario autenticado correctamente' });
        } else {
            res.status(401).json({ msg: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.error('Error de autenticación:', error);
        res.status(500).json({ msg: 'Error de autenticación' });
    }
}

// export const createNewUsuario = async (req, res) => {
//     const {cod_usuario, log_usuario, pwd_usuario, nom_usuario, ape_usuario} = req.body;
    
//     let {permiso, permiso_nivel_medio, permiso_nivel_alto} = req.body;

//     // Capitulo 514
//     const existeUsuario = await pool.findOne({log_usuario});

//     if (existeUsuario) {
//         const error = new Error('Usuario ya registrado');
//         return res.status(400).json({msg: error.message});
//     }

    
//     if (cod_usuario == null || log_usuario == null || pwd_usuario == null || nom_usuario == null || ape_usuario == null) {
//         return res.status(400).json({msg: 'Bad Request. Por Favor Llena Todos Los Campos'});
//     }
    
//     if (!permiso) {
//         permiso = null;
//     };
    
//     if (!permiso_nivel_medio) {
//         permiso_nivel_medio = null;
//     };
    
//     if (!permiso_nivel_alto) {
//         permiso_nivel_alto = null;
//     };

//     try {
//         const pool = await conectarDB();
    
//         await pool.request()
//         .input('cod_usuario', sql.Int, cod_usuario)
//         .input('log_usuario', sql.NVarChar, log_usuario)
//         .input('pwd_usuario', sql.NVarChar, pwd_usuario)
//         .input('nom_usuario', sql.NVarChar, nom_usuario)
//         .input('ape_usuario', sql.NVarChar, ape_usuario)
//         .input('permiso', sql.NVarChar, permiso)
//         .input('permiso_nivel_medio', sql.NVarChar, permiso_nivel_medio)
//         .input('permiso_nivel_alto', sql.NVarChar, permiso_nivel_alto)
//         .query(queries.addNewUser);
        
//         res.json({cod_usuario, log_usuario, pwd_usuario, nom_usuario, ape_usuario, permiso, permiso_nivel_medio, permiso_nivel_alto});        
//     } catch (error) {
//         res.status(500);
//         res.send(error.message)
//     }    
// }

// export const getUserById = async (req, res) => {
//     const {cod_usuario} =  req.params;
//     const pool = await conectarDB();
//     console.log('Valido getUserById');
//     const result = await pool.request()
//     .input('cod_usuario', cod_usuario).query(queries.getUserByCod_usuario);
//     res.send(result.recordset[0]);
// }


// export const deleteUserById = async (req, res) => {
//     const {cod_usuario} =  req.params;
//     const pool = await conectarDB();
//     const result = await pool.request()
//     .input('cod_usuario', cod_usuario).query(queries.deleteUser);
//     res.sendStatus(204);
// }

// export const getTotalUsers = async (req, res) => {
//     const pool = await conectarDB();
//     const result = await pool.request().query(queries.getTotalUsers);
//     res.json(result.recordset[0]['']);
// }

// export const updateUserById = async (req, res) => {
//     const {log_usuario, pwd_usuario, nom_usuario, ape_usuario, permiso, permiso_nivel_medio, permiso_nivel_alto} = req.body;
//     const {cod_usuario} = req.params;

//     if (cod_usuario == null || log_usuario == null || pwd_usuario == null || nom_usuario == null || ape_usuario == null) {
//         return res.status(400).json({msg: 'Bad Request. Por Favor Llena Todos Los Campos'});
//     }
    
//     if (!permiso) {
//         permiso = null;
//     };
    
//     if (!permiso_nivel_medio) {
//         permiso_nivel_medio = null;
//     };
    
//     if (!permiso_nivel_alto) {
//         permiso_nivel_alto = null;
//     };

//     const pool = await conectarDB();
//     await pool.request()
//     .input('cod_usuario', sql.Int, cod_usuario)
//     .input('log_usuario', sql.NVarChar, log_usuario)
//     .input('pwd_usuario', sql.NVarChar, pwd_usuario)
//     .input('nom_usuario', sql.NVarChar, nom_usuario)
//     .input('ape_usuario', sql.NVarChar, ape_usuario)
//     .input('permiso', sql.NVarChar, permiso)
//     .input('permiso_nivel_medio', sql.NVarChar, permiso_nivel_medio)
//     .input('permiso_nivel_alto', sql.NVarChar, permiso_nivel_alto)
//     .query(queries.updateUserById);

//     res.json({cod_usuario, log_usuario, pwd_usuario, nom_usuario, ape_usuario, permiso, permiso_nivel_medio, permiso_nivel_alto})

// }

export {getUsuarios, getUserByLogUsuario};