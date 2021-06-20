import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
