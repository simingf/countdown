import React from "react";
import Countdown from "./Countdown";

const CountdownsList = () => {
  const countdowns = [
    {
      title: "end of long distance!",
      startDate: "2023-06-12",
      endDate: "2023-09-02",
    },
    {
      title: "5 months",
      startDate: "2023-03-21",
      endDate: "2023-08-21",
    },
    {
      title: "6 months",
      startDate: "2023-03-21",
      endDate: "2023-09-21",
    },
    {
      title: "1 year",
      startDate: "2023-03-21",
      endDate: "2024-03-21",
    },
    {
      title: "US valentines",
      startDate: "2023-03-21",
      endDate: "2024-02-14",
    },
    {
      title: "CN valentines",
      startDate: "2023-03-21",
      endDate: "2023-08-22",
    }
  ];

  //sort countdowns by end date
  countdowns.sort((a, b) => {
    return new Date(a.endDate) - new Date(b.endDate);
  });

  return (
    <div>
      {countdowns.map((countdown, index) => (
        <Countdown
          key={index}
          title={countdown.title}
          startDate={countdown.startDate}
          endDate={countdown.endDate}
        />
      ))}
    </div>
  );
};

export default CountdownsList;
