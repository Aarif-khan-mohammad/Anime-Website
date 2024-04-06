import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Home from './components/Home';
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound';
import './App.css';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={LoginForm}/>
        <Route path="" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
