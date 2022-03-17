
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CallCards from './CallCards';
import ValimaiBooking from './ValimaiBooking';
import SelectSeats from './SelectSeats';
import DisplaySeats from './DisplaySeats';
import Payment from './Payment';
function App() {

  return (
    <Router>
    <div className="App">
      <Switch>  
          
          <Route path = "/movies/valimai/1">
            <Header />
            <CallCards id ={1}/>
            <Footer></Footer>
          </Route>  
          
          <Route path = "/movies/1/valimai/book_now">
            <Header />
              <ValimaiBooking />
          </Route>
          <Route path = "/movies/seats">
            <Header />
            <DisplaySeats />
          </Route>
          <Route path = "/movies/payment">
            <Header/>
            <Payment/>
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
