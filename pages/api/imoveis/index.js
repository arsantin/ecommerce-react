import { supabase } from "../../../services/supabase";

export default function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "GET":
      async function iniciaDB() {
        let { data, error } = await supabase.from("imoveis").select("*");
        if (error) {
          console.error(error);
          return;
        }
        console.log(data);
        res.send(data);
      }
      iniciaDB();
      break;
    case "PUT":
      pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`conectado como ${connection.threadId}`);
        const { id, nome, categorias, descricao, image } = req.body;
        connection.query(
          "UPDATE produtos SET nome = ?, descricao = ?, categorias = ?, image = ? WHERE id = ?",
          [nome, descricao, categorias, image, id],
          (err, rows) => {
            connection.release();
            if (!err) {
              res.send(`Produto ${nome} foi alterado.`);
            } else {
              console.log(err);
            }
          }
        );
      });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
