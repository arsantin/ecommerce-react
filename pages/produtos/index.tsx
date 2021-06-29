import Card from "../../components/Card"
import { useSelector } from "react-redux";
import { RootState } from '../../store/store'
import Layout from '../../components/Layout'

const Produtos = () => {
  const { produtos } = useSelector(
    (state:RootState) => state.produto
  );
  return(
    <Layout>
    <h1>produtos</h1>    
    {produtos.results && produtos.results.map(produto => {
      return <Card produto={produto} key={produto.id}/>  
    })}
    </Layout>
  )
}

export default Produtos