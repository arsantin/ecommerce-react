import { useForm } from "react-hook-form";
import { useEffect } from 'react'
import { useRouter } from "next/router";
import {fetchpostdetails, atualizaProduto} from "../../../../store/actions/ProdutosAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import Layout from '../../../../components/Layout/index'

const Editar = () => {
  const { postdetails } = useSelector((state: RootState) => state.produto);
  const router = useRouter();
  const url = router.query;  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchpostdetails(url));
  }, []);

  function updateProduto(data) {     
    dispatch(atualizaProduto(data));
  }

  return (
    <Layout>    
    <form onSubmit={handleSubmit(updateProduto)}>
      {JSON.stringify(postdetails)}    
      <label>id:</label><input defaultValue={postdetails.id} {...register("id")} />      
      <label>Nome:</label><input defaultValue={postdetails.nome} {...register("nome")} />      
      <input type="submit" />
    </form>
    </Layout>
  );
}

export default Editar