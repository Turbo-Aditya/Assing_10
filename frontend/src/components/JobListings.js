import React from "react";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import { jobPosts } from '../data/jobPosts'

function JobListings() {
  return (
    <div>
      <h1>Job Listings</h1>
      {jobPosts.map((job) => (
        <Card key={job.id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {job.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.description}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {job.lastUpdated}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={job.applyLink} target="_blank">
              Apply Now
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default JobListings;
