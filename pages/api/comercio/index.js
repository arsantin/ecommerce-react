import axios from 'axios';

export default function handler(req, res) {
  axios.get('http://localhost:5000/')
.then(function (response) {
  console.log(response);
  res.status(200).json(response.data)
})
.catch(function (error) {
  console.log(error);
});  
}