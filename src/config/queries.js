export const queries = {
    getAllUsers: 'SELECT * FROM dbo.c_usuarios ORDER BY cod_usuario',
    addNewUser: 'INSERT INTO dbo.c_usuarios (cod_usuario, log_usuario, pwd_usuario, nom_usuario, ape_usuario, permiso, permiso_nivel_medio, permiso_nivel_alto) VALUES (@cod_usuario, @log_usuario, @pwd_usuario, @nom_usuario, @ape_usuario, @permiso, @permiso_nivel_medio, @permiso_nivel_alto)',
    getUserByCod_usuario: 'SELECT * FROM dbo.c_usuarios WHERE cod_usuario = @cod_usuario',
    getUserByLog_usuario: 'SELECT * FROM dbo.c_usuarios WHERE log_usuario = @log_usuario AND pwd_usuario = @pwd_usuario',
    deleteUser: 'DELETE FROM dbo.c_usuarios WHERE cod_usuario = @cod_usuario',
    getTotalUsers: 'SELECT COUNT(*) FROM dbo.c_usuarios',
    updateUserById:  'UPDATE dbo.c_usuarios SET log_usuario = @log_usuario, pwd_usuario = @pwd_usuario, nom_usuario = @nom_usuario, ape_usuario = @ape_usuario, permiso = @permiso, permiso_nivel_medio = @permiso_nivel_medio, permiso_nivel_alto = permiso_nivel_alto WHERE cod_usuario = @cod_usuario',
    MnuOpciones: 'SELECT cod_modulo AS id, c_grupo_seg.seg_grupo, c_subgrupo_seg.seg_subgrupo, nom_modulo FROM c_opciones INNER JOIN c_grupo_seg ON c_opciones.grupo = c_grupo_seg.seg_cod_grupo INNER JOIN c_subgrupo_seg ON c_opciones.subgrupo = c_subgrupo_seg.seg_cod_subgrupo ORDER BY grupo'
}