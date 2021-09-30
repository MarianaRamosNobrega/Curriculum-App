import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import navbar from "navbar"
import Formik from "estudante"

function App() {
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/' exact component={Formkit} />
      
      </Switch>
    </Router>
  );
}

export default App;