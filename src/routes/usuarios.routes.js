import express from "express";
import { getUserByLogUsuario, getUsuarios } from "../controllers/usuarios.controller";

const router = express.Router();

// router.get('/', getUsuarios);
router.get('/usuarios', getUsuarios);
router.post('/login', getUserByLogUsuario);

export default router;