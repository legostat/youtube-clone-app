import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  // console.log(videos);
  const listOfVideos = videos.map((item, id) => (
    <VideoItem key={id} onVideoSelect={onVideoSelect} video={item} />
  ));
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
