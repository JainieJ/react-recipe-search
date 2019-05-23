import React, { Component } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { recipeData } from "../data/tempList";

class Recipes extends Component {
  constructor(props) {
    super(props);
  }
  state = { recipes: recipeData, search: "" };
  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { recipes, search } = this.state;
    return (
      <>
        <Search
          value={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={recipes} />
      </>
    );
  }
}

export default Recipes;
