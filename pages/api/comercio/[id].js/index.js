import axios from "axios";

export default function userHandler(req, res) {
  console.log(req.body)
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "GET":
      axios
        .get(`http://localhost:5000/api/comercio/${query.id}`)
        .then(function (response) {
          console.log(response);
          res.status(200).json(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
      case "DELETE":
        console.log("delete", id)
        axios
          .delete(`http://localhost:5000/1`)
          .then(function (response) {
            console.log(response);
            res.status(200).json(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        break;    
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
