import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppMovies from "./pages/AppMovies";


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/movies">
            <AppMovies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;