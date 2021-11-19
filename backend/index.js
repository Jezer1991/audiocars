const express =  require("express"); 
const bodyParser = require ("body-parser");
const cors = require ("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Jezer.Mysql.1991',
    database: 'prueba',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3001, () =>{
    console.log("running on port 3001");
});

/*app.get('/', (req, res)=>{
    const sql = "INSERT INTO peliculas (idpeliculas,nombre) VALUES (3,'Prueba_peliculas');";
    db.query(sql, (err, result) => {
        console.log(err);
        res.send("hello word1");
    });
} );*/

app.post('/api/save', (req, res) =>{
    const idPelicula = req.body.idPelicula;
    const nombre = req.body.nombre;
    const imagen = req.body.imagen;

    const sql = "INSERT INTO peliculas (idpeliculas,nombre,imagen) VALUES (?,?,?);";
    db.query (sql,[idPelicula, nombre, imagen], (err, result)=>{
        console.log(err);
    });
});

app.get('/api/get', (req, res) =>{
    const sql = "SELECT * FROM peliculas";
    db.query (sql,(err, result)=>{
        res.send(result);
    });
});


app.delete('/api/delete/:id', (req, res) =>{
    const idPelicula = req.params.id;
    const sql = "DELETE FROM peliculas where idpeliculas = ?";
    db.query (sql,idPelicula, (err, result)=>{
        console.log(err);
    });
});

app.put('/api/edit', (req, res) =>{
    const id = req.body.idPelicula;
    const nombre = req.body.nombre;
    const sql = "UPDATE peliculas SET nombre = ? WHERE idpeliculas = ?";
    db.query (sql,[nombre, id],(err, result)=>{
        console.log(err);
    });
});