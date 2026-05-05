// src/pages/TrainingMode/components/EventLog.jsx
import React from "react";

function EventLog({ events }) {
  return (
    <section className="panel event-log">
      <div className="panel-heading">
        <span className="panel-label">Training Log</span>
        <h2>System Events</h2>
      </div>

      <div className="event-list">
        {events.length === 0 ? (
          <p className="empty-log">Start the challenge to begin logging system events.</p>
        ) : (
          events.map((event) => (
            <p key={event.id}>
              <span>{event.time}</span>
              {event.message}
            </p>
          ))
        )}
      </div>
    </section>
  );
}

export default EventLog;
