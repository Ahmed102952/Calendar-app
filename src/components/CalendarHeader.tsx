interface claendarHeaderProps {
  currentDate: string;
  next: () => void;
  back: () => void
  addEvent: () => void
}
const CalendarHeader = ({currentDate, next, back, addEvent}: claendarHeaderProps) => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl text-veryDarkBlue font-semibold">Timeline</h1>
      <p className="flex-grow text-center capitalize font-medium text-veryDarkBlue">
        {currentDate}
      </p>
      <button
        className="border border-r-0 border-black border-opacity-10 w-10 h-10 font-bold text-xl"
        onClick={back}
      >
        &lt;
      </button>
      <button
        className="border border-black border-opacity-10 w-10 h-10 font-bold text-xl"
        onClick={next}
      >
        &gt;
      </button>
      <button onClick={addEvent} className="bg-veryDarkBlue text-white text-sm md:text-lg font-medium px-2 py-1 md:px-4 md:py-2 ml-1 md:ml-4 rounded-md shadow-md">Add Event</button>
    </header>
  );
};

export default CalendarHeader;
