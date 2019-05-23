import React, { Component } from "react";
import Recipe from "./Recipe";

class RecipeList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Hello from Recipe List</h1>
        <Recipe />
      </div>
    );
  }
}

export default RecipeList;
