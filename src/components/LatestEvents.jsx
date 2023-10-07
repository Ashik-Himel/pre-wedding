import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const LatestEvents = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  useEffect(() => {
    fetch('/data/events.json')
      .then(res => res.json())
      .then(data => setLatestEvents(data.slice(0, 8)))
  }, []);

  return (
    <section className="mt-12" id="latest-events">
      <div className="container">
        <h2 className="text-center text-3xl font-semibold mb-4">Latest <span className="text-primary">Events</span></h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {
            latestEvents.map(event => <EventCard key={event.id} event={event} />)
          }
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;