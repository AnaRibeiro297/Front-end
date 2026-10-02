export default function CardPrato({ prato }) {
  const { nome, categoria, preco, descricao } = prato;

  return (
    <div className="card-prato">
      <h3>
        {categoria === "Sobremesa" && "🍰 "}
        {nome}
      </h3>
      <span className="categoria">{categoria}</span>
      <p className="descricao">{descricao}</p>
      <p className="preco">R$ {preco.toFixed(2)}</p>
    </div>
  );
}