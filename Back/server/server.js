const express = require('express');
const cors = require('cors');
const app = express();
const sql = require('mssql');

// Configuración de la conexión a la base de datos
const dbConfig = {
    user: 'sa',
    password: '050119',
    server: 'WSTSMARTLOG17',
    database: 'Galys_prueba',
    options: {
        trustServerCertificate: true
    }
};

// Conexión a la base de datos
sql.connect(dbConfig, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Conexion exitosa a la base de datos');
    }
});

//Middleware
app.use(cors())

// Configuración de las rutas de la API
app.get('/', (req, res) => {
    const query = 'USE Galys_prueba; SELECT * FROM dbo.MAESTRO_ARTICULOS';
    sql.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.send('Error al obtener los registros');
        } else {
            res.send(result.recordset);
        }
    });
});



// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
