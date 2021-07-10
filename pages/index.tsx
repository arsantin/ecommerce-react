import Card from '../components/Card'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from '../store/store'
import {
  fetchProdutos
} from "../store/actions/ProdutosAction";
import { supabase } from '../services/supabase'


function Index({ comercio }) {
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(fetchProdutos(comercio));
		supabase.auth.onAuthStateChange((event, session) => {
			console.log(session)
		})
	},[])

	async function login(){
		const { error, user } = await supabase.auth.signIn({
			provider: 'github',
		})
		if(error){
			console.log(error);
			return;
		}
		console.log(user)		
	}

	return(
	<>
	<button onClick={login}>LOGIN</button>
	{comercio.map((produto)=> {
		return <Card key={produto.id} produto={produto}/>
	})}
  </>)
}
export default Index

export async function getServerSideProps(context) {	

	const res = await fetch(`http://localhost:3000/api/comercio`)
  const data = await res.json()  
  return { 
    props:{
      comercio:  data
    }
  }
}