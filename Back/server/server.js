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
app.get('/maestro_articulos', (req, res) => {
    const query = ' SELECT MA.CodigoArticulo , MA.DenomArticulo, MUC.Descripcion AS descUnidCarga, MZ.DenominacionZona, MZP.DenominacionZona as zonaPulmon FROM dbo.MAESTRO_ARTICULOS AS MA JOIN dbo.MAESTRO_UNIDADES_CARGA as MUC on MUC.CodigoUnidadCarga = MA.CodigoUnidadCarga JOIN dbo.MAESTRO_ZONAS as MZ ON MZ.CodigoZona = MA.CodigoZonaPicking JOIN dbo.MAESTRO_ZONAS as MZP ON MZP.CodigoZona = MA.CodigoZonaPulmon ';
    sql.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.send('Error al obtener los registros');
        } else {
            res.send(result.recordset);
        }
    });
});


app.get('/entradas_lineas', (req, res) => {
    const query = ' SELECT HEL.IdLinea,HEL.CodigoArticulo, MA.DenomArticulo, MZ.DenominacionZona FROM HISTORICO_ENTRADAS_LINEAS AS HEL JOIN MAESTRO_ARTICULOS AS MA ON MA.CodigoArticulo = HEL.CodigoArticulo JOIN MAESTRO_ZONAS AS MZ ON MZ.CodigoZona = MA.CodigoZonaPicking';
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
