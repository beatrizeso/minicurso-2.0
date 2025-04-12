import logo from "./assets/logo.png";
import "./App.css";
import Jogos from "./components/jogos";
import monopoly from "./assets/manopoly.jpg"
import go3 from "./assets/go3.jpg"
import scotland from "./assets/scotland.jpg"

function App() {
  return (
    <div className="app">
      <header className="header">
      <p className="title"> uma loja de jogos </p>
      </header>
      <div className="content">
        <Jogos image={monopoly} title="Tabuleiro Monopoly" price="R$ 50,00"/>
        <Jogos image={go3} title="Tabuleiro Go" price="R$100,00"/>
        <Jogos image={scotland} title="Tabuleiro Scotland Yard" price="R$65,00"/>
      </div>
    </div>
  );
}

export default App;
