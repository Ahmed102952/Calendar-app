interface claendarHeaderProps {
  currentDate: string
}
const CalendarHeader = ({currentDate}: claendarHeaderProps) => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl text-veryDarkBlue font-semibold">Timeline</h1>
      <p className="flex-grow text-center capitalize font-medium text-veryDarkBlue">
        {currentDate}
      </p>
      <button
        className="border border-r-0 border-black border-opacity-10 w-10 h-10 font-bold"
      >
        &lt;
      </button>
      <button
        className="border border-black border-opacity-10 w-10 h-10 font-bold"
      >
        &gt;
      </button>
    </header>
  );
};

export default CalendarHeader;
