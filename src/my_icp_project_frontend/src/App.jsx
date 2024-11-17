// src/App.jsx
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Balance from "./pages/Balance";
import { my_icp_project_backend } from "declarations/my_icp_project_backend";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/balance">Check Balance</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/balance" component={Balance} />
        <Route path="/" exact>
          <h1>Welcome to the User Account System</h1>
        </Route>
        <Route>
          <h1>404 - Not Found</h1> {/* Fallback route for undefined paths */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
