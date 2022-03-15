
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import MovieCards from './MovieCards';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CallCards from './CallCards';

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>  
          <Route path = "/header">
            <Header/>
          </Route>
          <Route path = "/movies/valimai/1">
            <Header />
            <CallCards id ={1}/>
            <Footer></Footer>
          </Route>  
          <Route path = "/movies/etharkumthuninthavan/2">
            <Header />
            
          </Route>  
          <Route path = "/">
          <Header></Header>
          <Home />
          <Footer></Footer>
          </Route>
          
          </Switch>
    </div>
    </Router>
  );
}

export default App;
