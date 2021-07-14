import axios from "axios";
import mysql from "mysql";
import { supabase } from "../../../../services/supabase";

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
      console.log("id", id);
      async function iniciaDBdetails() {
        let { data, error } = await supabase
          .from("produtos")
          .select("*")
          .eq("id", id);
        if (error) {
          console.error(error);
          return;
        }
        console.log(data);
        res.send(data);
      }
      iniciaDBdetails();
      break;
    case "DELETE":
      pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`conectado como ${connection.threadId}`);

        connection.query(
          "DELETE FROM produtos WHERE id = ?",
          [req.params.id],
          (err, rows) => {
            connection.release();
            if (!err) {
              res.send(`Produto ${[req.params.id]} foi removido.`);
            } else {
              console.log(err);
            }
          }
        );
      });
      break;
    default:
      res.setHeader("Allow", ["GET", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
