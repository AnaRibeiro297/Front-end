// function App() {
//   return (
//     <main className="app">
//       <h1> TechFood - Sabor & Saber</h1>
//       <p>Meu primeiro projeto em React</p>
//     </main>
//   );
// }

// export default App;

import Header from "./Header";
import CardPrato from "./CardPrato";
import Rodape from "./Rodape";

export default function App() {
  const cardapio = [
    {
      id: 1,
      nome: "Hambúrguer Gourmet",
      categoria: "Lanche",
      preco: 32.90,
      descricao: "Pão brioche, 180g de carne, queijo cheddar e bacon crocante."
    },
    {
      id: 2,
      nome: "Pizza Margherita",
      categoria: "Massa",
      preco: 45.00,
      descricao: "Molho de tomate artesanal, muçarela de búfala e manjericão fresco."
    },
    {
      id: 3,
      nome: "Pudim de Leite",
      categoria: "Sobremesa",
      preco: 12.50,
      descricao: "Pudim cremoso tradicional com calda de caramelo."
    },
    {
      id: 4,
      nome: "Petit Gâteau",
      categoria: "Sobremesa",
      preco: 18.90,
      descricao: "Bolo quente de chocolate com recheio cremoso e sorvete de baunilha."
    }
  ];

  return (
    <div className="app">
      <Header />
      
      <main className="conteudo">
        <h2>Nosso Cardápio</h2>
        <p className="total-itens">Cardápio com {cardapio.length} itens</p>

        <div className="lista-pratos">
          {cardapio.map((prato) => (
            <CardPrato key={prato.id} prato={prato} />
          ))}
        </div>
      </main>

      <Rodape />
    </div>
  );
}