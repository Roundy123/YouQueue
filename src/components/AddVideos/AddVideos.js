import React from "react";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import { ListResults } from "./ListResults";

class AddVideos extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleSearchResults = (e) => {
  //   youtube
  //     .get("search", { params: params })
  //     .then((res) => {
  //       this.setState({
  //         searchResults: res.data.items,
  //       });
  //       console.log(JSON.stringify(this.state.searchResults));
  //     })
  //     .catch((err) => {
  //       console.log("error: ", err.response);
  //     });
  // };

  render() {
    return (
      <div>
        <Container className="themed-container">
          <SearchBar
            handleSearch={this.props.handleSearch}
            handleInputChange={this.props.handleInputChange}
          />
          <ListResults
            searchResults={this.props.searchResults}
            handleAddToQueue={this.props.handleAddToQueue}
          />
          {/* {this.props.searchQuery} <br /> */}
          {/* {JSON.stringify(this.props.searchResults)} */}
        </Container>
      </div>
    );
  }
}

export default AddVideos;
