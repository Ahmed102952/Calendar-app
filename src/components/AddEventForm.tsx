import { useState } from "react";
import { formatDate } from "../util/formatDate";
import { event } from "../util/types";

interface addEventFormProps {
  onClose: () => void;
  onSave: (event: event) => void;
  clickeddate?: string;
}
const AddEventForm = ({ onClose, onSave, clickeddate }: addEventFormProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(clickeddate ? clickeddate : "");
  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        onSave({
          title,
          date
        });
      }}
    >
      <h2 className="font-semibold text-veryDarkBlue text-2xl text-center">
        Add Event
      </h2>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="title"
          className="text-xl text-veryDarkBlue font-medium"
        >
          Title
        </label>
        <input
          className="bg-black bg-opacity-5 rounded-md shadow-sm px-2 py-1 text-veryDarkBlue"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            e.preventDefault();
            setTitle(e.target.value);
          }}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xl text-veryDarkBlue font-medium">Date</label>
        <input
          className="bg-black bg-opacity-5 rounded-md shadow-sm px-2 py-1 text-veryDarkBlue"
          type="date"
          name="startDate"
          id="StartDate"
          value={formatDate(date)}
          onChange={(e) => setDate(formatDate(e.target.value))}
          required
        />
      </div>
      <div className="flex justify-between">
        <button className="bg-white px-2 text-veryDarkBlue" onClick={onClose}>
          Cancel
        </button>
        <button
          className="bg-veryDarkBlue text-white px-4 py-2 rounded-md shadow-md font-semibold text-lg"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddEventForm;
