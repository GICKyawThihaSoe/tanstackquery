"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const EventCard = (props) => {
  return (
    <Card className="mt-6">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.title}
        </Typography>
        <Typography>{props.description}</Typography>
        <Typography color="gray" className="mt-2">
          Time: {new Date(props.time).toLocaleString()}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={props.linkUrl}>
          <Button fullWidth>
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
