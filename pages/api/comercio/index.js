import axios from "axios";
import mysql from "mysql";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-east-04.cleardb.com",
  user: "b50a20cef1150f",
  password: "30cf20ed",
  database: "heroku_edff65e0eaa3999",
});

export default function userHandler(req, res) {
  console.log(req.body);
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "GET":
      pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`conectado como ${connection.threadId}`);
        connection.query("SELECT * FROM produtos", (err, rows) => {
          connection.release();
          if (!err) {
            res.status(200).json(rows);
          } else {
            console.log(err);
          }
        });
      });
      break;
      case "PUT":
        pool.getConnection((err, connection) => {
          if(err) throw err;
          console.log(`conectado como ${connection.threadId}`)  
          const {id, nome, categorias, descricao, image} = req.body;      
          connection.query('UPDATE produtos SET nome = ?, descricao = ?, categorias = ?, image = ? WHERE id = ?', [nome, descricao, categorias, image, id], (err, rows) => {
            connection.release()
            if(!err){
              res.send(`Produto ${nome} foi alterado.`)
            }else{
              console.log(err)
            }
          })
        })
        break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
