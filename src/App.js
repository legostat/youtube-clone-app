import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";

import { SearchBar, VideoDetail, VideoList } from "./components";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit("pdf generation with react an node");
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        q: searchTerm,
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_KEY
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
