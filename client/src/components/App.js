import '../App.css';
import Home from './Home';
import About from './About';
import Nav from '../layout/Nav';
import PageNotFound from './PageNotFound';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ListBooks from './books/ListBooks';
import Book from './books/Book';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path='/list_books' component={ListBooks}/> 
          <Route exact path="/book-:book_id" component={Book} />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
