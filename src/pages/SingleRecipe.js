import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: {},
      id,
      loading: true
    };
  }
  async componentDidMount() {
    const url = `https://www.food2fork.com/api/get?key=${
      process.env.REACT_APP_MY_KEY
    }&rId=${this.state.id}`;
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      this.setState({ recipe: responseData.recipe, loading: false });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title
    } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loading recipe...
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link to="/recipes" className="btn btn-warning mb-5 text-uppercase">
              back to recipes
            </Link>
            <img
              src={image_url}
              alt="recipe"
              style={{ maxHeight: "30rem" }}
              className="d-block w-100"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-warning text-capitalize text-slanted">
              provided by {publisher}
            </h6>
            <a
              href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 text-capitalize"
            >
              publisher webpage
            </a>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mx-2 mt-2 text-capitalize"
            >
              recipe url
            </a>
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingerdients</h2>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleRecipe;
