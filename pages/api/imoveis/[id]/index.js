import { supabase } from "../../../../services/supabase";

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
          .from("imoveis")
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
    
    default:
      res.setHeader("Allow", ["GET", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
