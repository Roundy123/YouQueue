import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Queue } from "./Queue";
import YoutubePlayer from "./YoutubePlayer";

export default class NowPlaying extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="m-2 border">
            {/* <iframe
              title="Video Player"
              id="youtubeiframe"
              src={
                this.props.queue[0]
                  ? `https://www.youtube.com/embed/${this.props.queue[0].id.videoId}`
                  : "https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
              }
              frameborder="0"
            ></iframe> */}
            <YoutubePlayer
              queue={this.props.queue}
              handleVideoEnd={this.props.handleVideoEnd}
            />
          </Row>
          <Row className="m-2">
            <Queue
              searchResults={this.props.queue}
              handleDeleteFromQueue={this.props.handleDeleteFromQueue}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
