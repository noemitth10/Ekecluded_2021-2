import '../App.css';
import Home from './Home';
import About from './About';
import Nav from '../layout/Nav';
import ListBooks from './books/ListBooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path='/list_books' component={ListBooks}/> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
