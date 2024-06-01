import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header>Tik-Tak-Toe</Header>
      <SubHeader>Web Development Internship Assessment @ Mondasi</SubHeader>
      <Board></Board>
      <Footer></Footer>
    </div>
  );
}

export default App;
