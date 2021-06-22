const Carrinho = (props) => {
  console.log("caaaaaaaaar", props.carrinho)
  return (
    <div>
      <h4>Carrinho:</h4>
      <div>
            {props.carrinho.map((titles) => {
              return (<div key={titles.id}>{titles.title}</div>);
            })}
          </div>
          <div>
            {props.carrinho &&
              props.carrinho.map((valor) => {
                return (<div key={valor.id}>{valor.vote_average}</div>);
              })}
          </div>  
    </div>     
  );
};

export default Carrinho;
