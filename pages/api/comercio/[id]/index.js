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
        if(err) throw err;
        console.log(`conectado como ${connection.threadId}`)
    
        connection.query('SELECT * FROM produtos WHERE id = ?', [id], (err, rows) => {
          connection.release()
          if(!err){
            res.send(rows)
          }else{
            console.log(err)
          }
        })
      })
      break;
      case "DELETE":
        pool.getConnection((err, connection) => {
          if(err) throw err;
          console.log(`conectado como ${connection.threadId}`)
      
          connection.query('DELETE FROM produtos WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()
            if(!err){
              res.send(`Produto ${[req.params.id]} foi removido.`)
            }else{
              console.log(err)
            }
          })
        })
        break;
    default:
      res.setHeader("Allow", ["GET", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}