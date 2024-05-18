import express from "express";
import { getUserByLogUsuario, getUsuarios } from "../controllers/usuarios.controller.js";

const router = express.Router();

// router.get('/', getUsuarios);
// router.get('/', getUsuarios);
// router.get('/usuarios', getUsuarios);
router.post('/login', getUserByLogUsuario);
// router.get('/login', (req, res) => {
//     res.send('Desde /dsi/usuarios/login')
// });

export default router;