import { event } from "../util/types";
interface daysPorps {
  value: number;
  onClick: () => void;
  event?: event;
  currentDay: boolean;
  paddingDays: number
}
const Days = ({ value, onClick, event, currentDay,paddingDays }: daysPorps) => {
  return (
    <div
      className={`bg-white aspect-square p-1 font-medium text-sm flex flex-col justify-between cursor-pointer ${
        currentDay
          ? "bg-blue text-white bg-opacity-50"
          : "hover:bg-blue hover:bg-opacity-25"
      }`}
      onClick={onClick}
      style={value === 1? {gridColumnStart: paddingDays} : {}}
    >
      <p>{value}</p>
      {event ? (
        <div className="bg-veryDarkBlue text-white text-lg rounded-md w-2 h-2 sm:w-full sm:h-auto sm:px-4 sm:py-2 overflow-hidden text-opacity-0 sm:text-opacity-100">
          {event.title}
        </div>
      ) : null}
    </div>
  );
};

export default Days;
