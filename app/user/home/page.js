"use client"
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import EventCard from "../../components/EventCard";
import { fetchEvents } from "../../utils/api";
import UserLayout from "../../UserLayout";

const EventsPage = () => {
  const queryClient = useQueryClient();

  const { data: events, isLoading, isError } = useQuery("events", fetchEvents, {
    onSuccess: () => {
      // Invalidate the "events" query to trigger a refetch
      queryClient.invalidateQueries("events");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching events</div>;
  }

  return (
    <UserLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 md:p-10 lg:p-20">
        {events.map((event) => (
          <EventCard
            key={event._id} // Replace with your event ID field
            title={event.title}
            description={event.description}
            time={event.time}
          />
        ))}
      </div>
    </UserLayout>
  );
};

export default EventsPage;
