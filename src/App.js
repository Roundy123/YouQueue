import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import AddVideos from "./components/AddVideos/AddVideos";
import NowPlaying from "./components/NowPlaying/NowPlaying";
import { youtube, params } from "./api/youtube";
require("dotenv").config();

console.log("API key app.js", process.env.YOUTUBE_API_KEY);

console.log("HELLO app:", process.env.HELLO);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "dog",
      searchResults: [],
      // searchResults: [
      //   {
      //     kind: "youtube#searchResult",
      //     etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/llkZbrIhBvaxzskMFpZGrmD6qoU"',
      //     id: { kind: "youtube#video", videoId: "nJeSlBzBplY" },
      //     snippet: {
      //       publishedAt: "2020-04-28T22:11:26.000Z",
      //       channelId: "UCL0L7RQ8mrO10OLRlWPoq6A",
      //       title:
      //         "Food Chain Fishing Challenge 3 - Flying Fish to Blue Marlin",
      //       description:
      //         "In this episode, I started fishing for squid and flying fish in 3000ft of water and then eventually used them as bait to catch a giant blue marlin in the Food Chain ...",
      //       thumbnails: {
      //         default: {
      //           url: "https://i.ytimg.com/vi/nJeSlBzBplY/default.jpg",
      //           width: 120,
      //           height: 90,
      //         },
      //         medium: {
      //           url: "https://i.ytimg.com/vi/nJeSlBzBplY/mqdefault.jpg",
      //           width: 320,
      //           height: 180,
      //         },
      //         high: {
      //           url: "https://i.ytimg.com/vi/nJeSlBzBplY/hqdefault.jpg",
      //           width: 480,
      //           height: 360,
      //         },
      //       },
      //       channelTitle: "BlacktipH",
      //       liveBroadcastContent: "none",
      //     },
      //   },
      //   {
      //     kind: "youtube#searchResult",
      //     etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/DWysmTn-PhRKbLhqG4pPHmRLXwo"',
      //     id: { kind: "youtube#video", videoId: "cC9r0jHF-Fw" },
      //     snippet: {
      //       publishedAt: "2016-11-09T17:00:07.000Z",
      //       channelId: "UCI-Ho-GaKYbtMzXJWmWAsrg",
      //       title:
      //         "2 Hours of Beautiful Coral Reef Fish, Relaxing Ocean Fish, &amp; Stunning Aquarium Relax Music 1080p HD",
      //       description:
      //         "2 Hours of Beautiful Coral Reef Fish, Relaxing Ocean Fish, & Stunning Aquarium Relax Music 1080p HD #aquarium #coralreef #relaxingmusic Picture Credits: ...",
      //       thumbnails: {
      //         default: {
      //           url: "https://i.ytimg.com/vi/cC9r0jHF-Fw/default.jpg",
      //           width: 120,
      //           height: 90,
      //         },
      //         medium: {
      //           url: "https://i.ytimg.com/vi/cC9r0jHF-Fw/mqdefault.jpg",
      //           width: 320,
      //           height: 180,
      //         },
      //         high: {
      //           url: "https://i.ytimg.com/vi/cC9r0jHF-Fw/hqdefault.jpg",
      //           width: 480,
      //           height: 360,
      //         },
      //       },
      //       channelTitle: "Cat Trumpet",
      //       liveBroadcastContent: "none",
      //     },
      //   },
      // ],
      queue: [],
      videosAdded: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddToQueue = this.handleAddToQueue.bind(this);
    this.handleDeleteFromQueue = this.handleDeleteFromQueue.bind(this);
    this.handleVideoEnd = this.handleVideoEnd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  handleAddToQueue = (e) => {
    const newNumberOfVideos = this.state.videosAdded + 1;
    this.setState({
      queue: [...this.state.queue, { ...e, key: newNumberOfVideos }],
      videosAdded: newNumberOfVideos,
    });
    console.log(this.state.queue);
  };

  handleDeleteFromQueue = (e) => {
    this.setState({
      queue: this.state.queue.filter((video) => video.key !== e.key),
    });
  };

  handleVideoEnd = (e) => {
    this.setState({
      queue: this.state.queue.filter(
        (video) => video.key !== this.state.queue[0].key
      ),
    });
  };

  handleSearch = (e) => {
    youtube
      .get("search", { params: { ...params, q: this.state.searchQuery } })
      .then((res) => {
        this.setState({
          searchResults: res.data.items,
        });
        console.log(JSON.stringify(this.state.searchResults));
      })
      .catch((err) => {
        console.log("error: ", err.response);
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="border" xs="6">
              <NowPlaying
                searchResults={this.state.searchResults}
                queue={this.state.queue}
                handleDeleteFromQueue={this.handleDeleteFromQueue}
                handleVideoEnd={this.handleVideoEnd}
              />
            </Col>
            <Col className="border" xs="6">
              <AddVideos
                handleInputChange={this.handleInputChange}
                searchQuery={this.state.searchQuery}
                searchResults={this.state.searchResults}
                handleAddToQueue={this.handleAddToQueue}
                handleSearch={this.handleSearch}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
