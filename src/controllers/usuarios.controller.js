import Usuario from "../models/C_usuarios.js";

const getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find().exec();
    res.json(usuarios);
};

const getUserByLogUsuario = async (req, res) => {
    const {usuario, password} = req.body;

    const usuarioLog = await Usuario.findOne({log_usuario: usuario.toUpperCase()});

    if (!usuarioLog) {
        const error = new Error("El Usuario no existe")
        return res.status(404).json({msg: 'Usuario no existe'})
    } else {
        const result = password === usuarioLog.pwd_usuario;
        if (result) {
            res.json('Contraseña correcta')
        } else {
            const error = new Error("El Usuario no existe")
        return res.status(404).json({msg: 'Contraseña incorrecta'})
        }
    }
}

export {getUsuarios, getUserByLogUsuario};