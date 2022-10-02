import { event } from "../util/types";
import { weekdays } from "../util/weeksDays";

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
      className={`bg-white aspect-square p-4 font-medium text-lg flex flex-col justify-between cursor-pointer ${
        currentDay
          ? "bg-blue text-white bg-opacity-50"
          : "hover:bg-blue hover:bg-opacity-25"
      }`}
      onClick={onClick}
      style={value === 1? {gridColumnStart: paddingDays} : {}}
    >
      <p>{value}</p>
      {event ? (
        <div className="bg-veryDarkBlue text-white text-lg rounded-md px-2 py-2">
          {event.title}
        </div>
      ) : null}
    </div>
  );
};

export default Days;
