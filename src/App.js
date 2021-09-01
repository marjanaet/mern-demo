import SignUpForm from "./components/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import AboutUs from "./components/aboutus";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/signup' component={SignUpForm} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
