import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}>
        <img
          style={{ marginRight: "12px" }}
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <Typography variant="subtitle1">
          <strong>{video.snippet.title}</strong>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
