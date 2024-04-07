import {BrowserRouter , Switch , Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound';
import Home from "./components/Home"
import './App.css';
import About from './components/About';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm}/>
        <ProtectedRoute exact path="/about" component={About}/>
        <Route path="" component={NotFound}/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
