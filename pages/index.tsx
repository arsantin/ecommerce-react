import Card from '../components/Card'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from '../store/store'
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
	{comercio && comercio.map(produto => {
		return <Card produto={produto} />
	})
	}
  </>)
}

Index.getInitialProps = async (ctx) => {	
  const res = await fetch(`https://guiadeitapoa.com.br/apicomercios`)
  const data = await res.json()  
  return { comercio:  data }
	

}

export default Index