import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Default extends Component {
  state = {};
  render() {
    return (
      <Header styleClass="default-hero" title="404">
        <h2 className="text-uppercase text-light">
          you are in the wrong place
        </h2>
        <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
          go home
        </Link>
      </Header>
    );
  }
}

export default Default;

//anothre img via anothre styleclass
//another title 404
//h2 with text
//link home
