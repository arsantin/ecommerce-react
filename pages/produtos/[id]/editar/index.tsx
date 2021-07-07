import axios from 'axios';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import Layout from '../../../../components/Layout/index'

const Editar = () => {
  const { postdetails } = useSelector((state: RootState) => state.produto);
  const router = useRouter();
  const id = router.query.id; 
  console.log(id) 
  const { register, handleSubmit, formState: { errors } } = useForm();

  function updateProduto(data) {     
    axios
        .put(`http://localhost:3000/api/comercio`, data)
        .then(function (response) {
          console.log(response);          
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  function deletaProduto(id) {   
    console.log("id delete", id)  
    axios
        .delete(`http://localhost:3000/api/comercio/1`)
        .then(function (response) {
          console.log(response);          
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  return (
    <Layout>    
    <form onSubmit={handleSubmit(updateProduto)}>
      {JSON.stringify(postdetails)}    
      <label>id:</label><input defaultValue={postdetails.id} {...register("id")} />      
      <label>Nome:</label><input defaultValue={postdetails.nome} {...register("nome")} />      
      <input type="submit" />
    </form>
    <button onClick={deletaProduto}>APAGAR</button>
    </Layout>
  );
}

export default Editar