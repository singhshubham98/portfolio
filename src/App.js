import React, { Component } from "react";
import Main from "./components/main";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
