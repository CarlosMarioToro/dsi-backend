import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const dbSettings = {
    server: process.env.DB_SERVER,
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DB_USER,
            password: process.env.DB_PASS,
        }
    },
    options: {
        port: 1433,
        database: process.env.DB_DATABASE,
        trustServerCertificate: true
    }
}

const conectarDB = async () => {
    try {
        const pool = await sql.connect(dbSettings, err => {
            if (err) console.log(err)
            console.log("Connection Successful!");
        });
        // const url = `${pool.config.server}:${pool.config.port}`;
        // console.log(`Sql Server conectado en ${url}`);
        return pool;
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;