import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Message from "./pages/Message";
import Support from "./pages/Support";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
          <Route path="/team" component={Team} />
          <Route path="/message" component={Message} />
          <Route path="/support" component={Support} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
