import React from "react";

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        test {this.props.match.params.id}
        <a href="https://www.vecteezy.com/free-vector/food">
          Food Vectors by Vecteezy
        </a>
      </div>
    );
  }
}

export default RecipeDetails;
