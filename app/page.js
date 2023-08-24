"use client";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchEvents } from "./utils/api";
import UserLayout from "./UserLayout";
import EventCard from "./components/EventCard";
import { useRouter } from "next/navigation";
import { Spinner } from "@material-tailwind/react";

const EventsPage = () => {
  const router = useRouter();
  const { data: events, isLoading, isError } = useQuery("events", fetchEvents);

  // Prefetch the "/user/home" route
  useEffect(() => {
    router.prefetch("/user/home");
  }, [router]); // Include "router" in the dependency array

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner className="h-16 w-16 text-gray-900/50" />;
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching events</div>;
  }

  return (
    <UserLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 md:p-10 lg:p-20">
        {events.map((event) => (
          <EventCard
            key={event._id}
            title={event.title}
            description={event.description}
            time={event.time}
            linkUrl="/user/home"
          />
        ))}
      </div>
    </UserLayout>
  );
};

export default EventsPage;
