import React, { Component } from "react";
import YouTube from "react-youtube";

export default class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const opts = {
      height: "350",
      width: "520",
      margin: "50px auto",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div>
        <YouTube
          videoId={
            this.props.queue[0] ? this.props.queue[0].id.videoId : "2g811Eo7K8U"
          }
          opts={opts}
          onEnd={() => this.props.handleVideoEnd()}
        />
      </div>
    );
  }
}
