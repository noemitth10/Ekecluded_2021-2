import '../App.css';
import Home from './Home';
import About from './About';
import Nav from '../layout/Nav';
import Register from './authentication/Register'
import Login from './authentication/Login'
import PageNotFound from './PageNotFound';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ListBooks from './books/ListBooks';
import Book from './books/Book';
import {Container} from '@material-ui/core';
import Footer from '../layout/Footer';
import AddBook from "./books/AddBook"
import CategoryByName from './categories/CategoryByName';


function App() {
  return (
    <Router>
      <Nav/>
      <Container maxWidth="md" className="Container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path='/list_books' component={ListBooks}/> 
          <Route exact path="/book-:book_id" component={Book} />
          <Route path="/Register" exact component={Register}/>
          <Route path="/Login" exact component={Login}/>
          <Route path="/add_book" exact component={AddBook}/>
          <Route path="/category/:category_name" component={CategoryByName}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
