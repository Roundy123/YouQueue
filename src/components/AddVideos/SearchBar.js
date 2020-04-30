import React, { Component } from "react";
import { Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InputGroup className="searchBar">
          <Input onChange={this.props.handleInputChange} />
          <InputGroupAddon addonType="append">
            <Button onClick={this.props.handleSearch}>Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}
