import express from "express";
import { getCentroCostos } from "../controllers/centroCostos.controller.js";

const router = express.Router();

// router.get('/', getUsuarios);
// router.get('/', getUsuarios);
router.get('/', getCentroCostos);
// router.post('/login', getUserByLogUsuario);
// router.get('/login', (req, res) => {
//     res.send('Desde /dsi/usuarios/login')
// });

export default router;