import '../App.css';
import Home from './Home';
import Nav from '../layout/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
