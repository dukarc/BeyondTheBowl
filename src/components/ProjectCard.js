import React from "react";
import { Card, CardMedia, CardTitle, Typography } from "material-ui/Card";

export default ({ title, description, image, url }) => (
  <Card style={{ marginTop: "20px" }}>
    <a href={url}>
      <CardMedia overlay={<CardTitle title={title} subtitle={description} />}>
        <img src={image} alt="" />
      </CardMedia>
    </a>
  </Card>
);
