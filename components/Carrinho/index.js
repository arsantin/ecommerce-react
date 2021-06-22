const Carrinho = (props) => {
  console.log("caaaaaaaaar", props.carrinho);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", fontSize: "10px" }}>
      <h4 style={{ flexBasis: "100%" }}>Carrinho:</h4>
      {props.carrinho.map((produto) => {
        return (
          <div style={{ display: "flex", flexBasis: "100%", flexWrap: 'nowrap' }}>
            <div key={produto.id} style={{ flexBasis: "70%" }}>{produto.title}</div>
            <div key={produto.id} style={{ flexBasis: "30%", whiteSpace: 'nowrap' }}> {produto.vote_count}X {produto.qt} = R${produto.vote_count * produto.qt} 
            </div>
          </div>
        );
      })}
      <div><strong>TOTAL: </strong></div>
    </div>
  );
};

export default Carrinho;
