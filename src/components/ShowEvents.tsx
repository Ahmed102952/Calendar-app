import { useState } from "react";
import { event } from "../util/types";

interface showEventsProps {
  event?: event;
  date: string;
  onClose: () => void;
  onDel: (event: event) => void;
}
const ShowEvents = ({ event, date, onClose, onDel }: showEventsProps) => {
  return (
    <div>
      <h2 className="py-2 text-xl text-veryDarkBlue font-semibold">
        Events for {date}
      </h2>
      <div className="border-t border-black space-y-6 pt-4">
        <div className="space-y-2">
          <p className="text-lg text-veryDarkBlue font-medium">Title:</p>
          <p className="bg-black bg-opacity-5 rounded-md shadow-sm px-2 py-1 text-veryDarkBlue">
            {event?.title}
          </p>
        </div>
        <div className="flex justify-between">
          <button className="bg-white px-2 text-veryDarkBlue" onClick={onClose}>
            Close
          </button>
          <button
            className="bg-orange text-white px-4 py-2 rounded-md shadow-md font-semibold text-lg"
            onClick={() => onDel(event as event)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowEvents;
