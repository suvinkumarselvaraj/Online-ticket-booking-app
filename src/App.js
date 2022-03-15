import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MovieCards from './MovieCards';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="App">

        <Header></Header>
        <Home />
        <Footer></Footer>
    </div>
  );
}

export default App;
