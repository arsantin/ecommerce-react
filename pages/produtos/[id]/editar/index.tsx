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
  const id = router.query;  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchpostdetails(id));
  }, []);

  function updateProduto(data) {  
    console.log("data", data);   
    dispatch(atualizaProduto(data));
  }

  return (
    <Layout>    
    <form onSubmit={handleSubmit(updateProduto)}>
      {JSON.stringify(postdetails)}    
      <input defaultValue={postdetails.id} {...register("id")} />      
      <input defaultValue={postdetails.title} {...register("title")} />      
      <input type="submit" />
    </form>
    </Layout>
  );
}

export default Editar