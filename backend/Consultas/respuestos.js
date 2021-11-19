const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const { query } = require("express");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Jezer.Mysql.1991',
    database: 'audiocards',
});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
    console.log("Running Audio Card's");
});

app.get('api/maxRef')

app.post('/api/save', (req, res) => {
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const marca = req.body.marca;
    const stock = req.body.stock;
    const precio = req.body.precio;
    const esOriginal = req.body.esOriginal;
    const imagen = req.body.img;
    const sql1 = "SELECT max(referencia) as refMax from respuestos";

    db.query(sql1, (err, rows) => {
        const maxRef = (rows[0].refMax === 0 || rows[0].refMax === null) ? 1000: rows[0].refMax+1;
        const sql = "INSERT INTO respuestos (codigo, nombre, descripcion, marca, stock, precio, esOriginal,referencia, img) VALUES (?,?,?,?,?,?,?,?,?);";
        db.query(sql, [codigo, nombre, descripcion, marca, stock, precio, esOriginal,maxRef, imagen], (err, result) => {
            if (err != null) res.json({ok: true});
            res.send(err);
        });
        if (err != null) res.json({ok: true});
    });


});

app.get('/api/getRespuestos', (req, res) => {
    const sql = "SELECT * FROM respuestos";
    db.query(sql, (err, result) => {
        res.send(result);
    });
});

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM respuestos where id = ?";
    db.query(sql, id, (err, result) => {
        if (err != null) res.send(result);
        res.send(err);
    });
});
