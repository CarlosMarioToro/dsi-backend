import express from "express";
import { getCiudades } from "../controllers/ciudades.controller.js";

const router = express.Router();

// router.get('/', getUsuarios);
// router.get('/', getUsuarios);
router.get('/', getCiudades);
// router.post('/login', getUserByLogUsuario);
// router.get('/login', (req, res) => {
//     res.send('Desde /dsi/usuarios/login')
// });

export default router;