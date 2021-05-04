import React, {useState} from 'react';
import '../App.css';
import Home from './Home';
import About from './About';
import Nav from '../layout/Nav';
import Register from './authentication/Register'
import Login from './authentication/Login'
import PageNotFound from './PageNotFound';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ListBooks from './books/ListBooks';
import Book from './books/Book';
import {Container} from '@material-ui/core';
import Footer from '../layout/Footer';
import AddBook from "./books/AddBook";
import UserPage from './authentication/userPage';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = boolean => {
    setIsAuthenticated(boolean);
    if(isAuthenticated == false) localStorage.removeItem("token");
  };
  return (
    <Router>
      <Nav isAuthenticated={isAuthenticated} setAuth={setAuth}/>
      <Container maxWidth="md" className="Container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path='/list_books' component={ListBooks}/> 
          <Route exact path="/book-:book_id" component={Book} />
          <Route path="/Register" exact component={Register}/>
          <Route path="/Login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth}/> : <Redirect to="/user_page" />}/>
          <Route exact path="/user_page"  render={props => isAuthenticated ? <UserPage {...props} setAuth={setAuth}/> : <Redirect to="/Login" />}/>
          <Route path="/add_book" exact component={AddBook}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
