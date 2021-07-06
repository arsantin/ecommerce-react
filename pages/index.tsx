import Card from '../components/Card'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from '../store/store'
import { PrismaClient } from '.prisma/client';
import {
  fetchProdutos
} from "../store/actions/ProdutosAction";



function Index({ comercio }) {
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(fetchProdutos(comercio));
	},[])

	return(
	<>
	{comercio.map((produto)=> {
		return <Card key={produto.id} produto={produto}/>
	})}
  </>)
}
export default Index

export async function getServerSideProps(context) {	

	const res = await fetch(`http://localhost:5000`)
  const data = await res.json()  
  return { 
    props:{
      comercio:  data
    }
  }
}