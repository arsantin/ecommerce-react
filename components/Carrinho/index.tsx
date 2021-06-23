const Carrinho = (props) => {
  
  return (
    <div style={{ display: "flex", flexWrap: "wrap", fontSize: "10px" }}>
      <h4 style={{ flexBasis: "100%" }}>Carrinho:</h4>
      {props.carrinho.map((produto) => {
        return (
          <div style={{ display: "flex", flexBasis: "100%", flexWrap: 'nowrap' }} key={produto.id}>
            <div style={{ flexBasis: "50%" }}>{produto.title}</div>
            <div style={{ flexBasis: "20%", whiteSpace: 'nowrap' }}>{produto.vote_count} X <button>-</button> {produto.qt} <button>+</button> = R${produto.vote_count * produto.qt} 
            </div>            
          </div>
        );
      })}
      
      <button>Ver carrinho</button>
    </div>
  );
};

export default Carrinho;
