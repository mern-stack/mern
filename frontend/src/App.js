import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Welcome from "./components/Welcome";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

class App extends Component {
  state = {
    AppName: "Mern Starter"
  };
  render() {
    return (
      <Provider store={store}>
        <div className="site-bg">
          <Router>
            <Header className="headerClass" AppName={this.state.AppName} />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Footer />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
