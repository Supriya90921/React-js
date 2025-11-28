import React, { Component } from "react";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
    };
  }
    render()
    {
      return (
        <form className="row" onSubmit={(e)=>{
            e.preventDefault();
          this.props.addItem(this.state.name, Number(this.state.price));
}

        }>
          <div className="mb-3 col-4">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              name="name"
              onChange={(e) =>
                this.setState({ name: e.currentTarget.value })
              }
              value={this.state.name}
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="InputPrice" className="form-label">
              price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              onChange={(e) =>
                this.setState({ price: e.currentTarget.value })
              }
              value={this.state.price}
            />
          </div>

          <button type="submit" className="btn btn-primary col-4">
            Add
          </button>
        </form>
      );
    }
  }

