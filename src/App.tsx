import { useEffect, useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Days from "./components/Days";
import { days, event } from "./util/types";
import { weekdays } from "./util/weeksDays";
import AddEventForm from "./components/AddEventForm";
import ShowEvents from "./components/ShowEvents";
import useDate from "./Hooks/useDate";

function App() {
  const [events, setEvents] = useState<event[]>(
    localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events") as string) : []
  );
  const [clicked, setClicked] = useState("");
  const [nav, setNav] = useState(0);
  const [showEventModel, setShowEventModel] = useState(false);
  const [addEventModel, setAddEventModel] = useState(false);

  const { dateDisplay, days, paddingDays } = useDate({ events, nav });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const saveEventHandle = (event: event) => {
    if (events.find((e) => e.date === event.date) === undefined) {
      let arr = events;
      arr.push(event);
      setEvents(arr);
      setAddEventModel(false);
    } else {
      window.alert("You have an event in that date");
    }
  };
  const deleteEventHandle = (event: event) => {
    let arr = events;
    setEvents(arr.filter((e) => e.date !== event.date));
    setShowEventModel(false);
  };

  return (
    <div className="App px-16 py-6">
      <CalendarHeader
        currentDate={dateDisplay}
        addEvent={() => setAddEventModel(true)}
        next={() => setNav(nav + 1)}
        back={() => setNav(nav - 1)}
      />
      <div className="grid col-span-7 grid-cols-7 place-items-center py-4">
        {weekdays.map((d, i) => {
          return (
            <div
              key={i}
              className={`flex-grow text-center rounded-full py-2 px-4 font-medium text-veryDarkBlue text-opacity-90`}
            >
              <p className="capitalize">{d}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-7 content-start gap-px bg-black bg-opacity-10 border-t border-black border-opacity-5">
        {days.map((d, i) => {
          return (
            <Days
              key={i}
              value={d.value}
              paddingDays={paddingDays}
              event={events.find((e) => e.date === d.dayString)}
              onClick={() => {
                setClicked(d.dayString);
                events.find((e) => e.date === d.dayString)
                  ? setShowEventModel(true)
                  : setAddEventModel(true);
              }}
              currentDay={d.isCurrentDay}
            />
          );
        })}
      </div>
      {showEventModel ? (
        <div className="absolute px-6 py-4 bg-white shadow-md rounded-md top-20 left-1/2 -translate-x-1/2">
          <ShowEvents
            event={events.find((e) => e.date === clicked)}
            date={clicked}
            onClose={() => setShowEventModel(false)}
            onDel={deleteEventHandle}
          />
        </div>
      ) : null}
      {addEventModel ? (
        <div className="absolute px-8 py-4 bg-white shadow-md rounded-md top-20 left-1/2 -translate-x-1/2">
          <AddEventForm
            onSave={saveEventHandle}
            onClose={() => setAddEventModel(false)}
            clickeddate={clicked}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
