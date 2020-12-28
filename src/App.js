import './App.css';
import PayrollForm from "./components/payroll-form/payroll-form";
import HomePage from "./components/employee-home/employee-home.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path = "/"><HomePage /></Route>
          <Route exact path = "/home"><HomePage /></Route>
          <Route exact path="/payroll-form"><PayrollForm /></Route>
          <Route exact path="/payroll-form/:id"><PayrollForm /></Route>
          <Route exact path=""><Redirect exact from="/" to="/home" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;