import React from "react";
import { Card, CardMedia, CardTitle } from "material-ui/Card";

export default ({ title, description, image, url }) => (
  <Card>
    <a href={url}>
      <CardMedia overlay={<CardTitle title={title} subtitle={description} />}>
        <img src={image} alt="" />
      </CardMedia>
    </a>
  </Card>
);
