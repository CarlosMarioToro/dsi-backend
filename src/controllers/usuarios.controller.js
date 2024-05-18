import Usuario from "../models/C_usuarios.js";

const getUsuarios = async (req, res) => {
    try {
        let message = 'Registros encontrados';
        let registros = await Usuario.find().exec();
        console.log(registros);
        res.json(registros);
        if(!registros.length) {
            message = 'No existen registros';
        }
        return res.status(200).json({
          message,
          registros
        });        
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

const getUserByLogUsuario = async (req, res) => {
    const {usuario, password} = req.body;
    console.log(usuario);
    console.log(password);

    const usuarioLog = await Usuario.findOne({log_usuario: usuario.toUpperCase()});

    if (!usuarioLog) {
        console.log('No usuario found');
        const error = new Error("El Usuario no existe")
        return res.status(404).json({msg: 'Usuario no existe'})
    } else {
        console.log('usuario found');
        console.log(usuarioLog);
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