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
        .get("http://localhost:5000")
        .then(function (response) {
          console.log(response);
          res.status(200).json(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      break;
    case "PUT":
      axios
        .put(`http://localhost:5000`, req.body)
        .then(function (response) {
          console.log(response);
          res.status(200).json(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
      case "DELETE":
        axios
          .delete(`http://localhost:5000/${id}`)
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
