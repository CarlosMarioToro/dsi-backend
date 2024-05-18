import express from 'express'
import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import usuariosRoutes from  './routes/usuarios.routes.js';
import centroCostosRoutes from  './routes/centroCostos.routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(bodyParser.json());

conectarDB();

app.use(cors());

app.use('/dsi', usuariosRoutes);
app.use('/dsi/centro-costos', centroCostosRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});