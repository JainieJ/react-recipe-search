import React, { Component } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { recipeData } from "../data/tempList";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }
  state = {
    recipes: recipeData,
    search: "",
    url: `https://www.food2fork.com/api/search?key=${
      process.env.REACT_APP_MY_KEY
    }`,
    base_url: `https://www.food2fork.com/api/search?key=${
      process.env.REACT_APP_MY_KEY
    }`,
    query: "&q=",
    error: ""
  };
  async getRecipes() {
    try {
      const response = await fetch(this.state.url);
      const responseJSON = await response.json();
      console.log(responseJSON);
      if (responseJSON.recipes.length === 0) {
        this.setState({
          error:
            "Sorry, your requsted did not return any results. Please, try again",
          search: ""
        });
      } else {
        this.setState({ recipes: responseJSON.recipes, error: "" });
      }
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getRecipes();
  }
  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const requestUrl = `${this.state.base_url}${this.state.query}${
      this.state.search
    }`;
    this.setState({ url: requestUrl, search: "" }, () => this.getRecipes());
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
        {this.state.error ? (
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-3">
                <h2 className="text-orange text-slanted text-center">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </>
    );
  }
}

export default Recipes;
