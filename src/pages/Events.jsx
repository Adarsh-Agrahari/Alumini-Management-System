import React from "react";

const events = [
  { id: 1, name: "Annual Meetup", date: "2024-12-01", location: "New York" },
  { id: 2, name: "Webinar: Career Growth", date: "2024-11-25", location: "Online" },
];

const Events = () => {
  return (
    <section className="bg-gray-100 py-16 mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white shadow-md rounded-md p-4">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">Location: {event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
