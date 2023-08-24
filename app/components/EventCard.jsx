"use client"
import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import React from "react";


const EventCard = ({ title, description, time }) => {
  return (
    <Card className="mt-6">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
        <Typography variant="body2" color="gray" className="mt-2">
          Time: {new Date(time).toLocaleString()}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
