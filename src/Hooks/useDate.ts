import { useEffect, useState } from "react";
import { days, event } from "../util/types";
import { weekdays } from "../util/weeksDays";

interface useDate {
  events: event[];
  nav: number;
}

const useDate = ({ events, nav }: useDate) => {
  const [days, setDays] = useState<days>([]);
  const [dateDisplay, setDateDisplay] = useState("");
  const [paddingDays, setPaddingDays] = useState(0);
  useEffect(() => {
    const dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    setPaddingDays(weekdays.indexOf(dateString.split(', ')[0]) + 1);

    setDateDisplay(
      `${dt.toLocaleDateString("en-us", { month: "long" })} ${year}`
    );

    let daysArr = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const dayString = `${i.toLocaleString("en-us", {
        minimumIntegerDigits: 2,
      })}-${month + 1}-${year}`;

      daysArr.push({
        value: i,
        dayString: dayString,
        isCurrentDay: i === day && nav === 0,
      });
    }
    setDays(daysArr);
  }, [events, nav]);

  return {
    days,
    dateDisplay,
    paddingDays
  };
};

export default useDate;
