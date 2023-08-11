import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Container, Paper } from "@mui/material";

const Countdown = ({ title, startDate, endDate }) => {
  const calculateTimeLeft = () => {
    const total = new Date(endDate) - new Date(startDate);
    const complete = new Date() - new Date(startDate);
    const todo = new Date(endDate) - new Date();
    if (todo < 0) {
      return { timeLeft: 0, progress: 100 };
    } else {
      const progress = ((100 * complete) / total).toFixed(2);
      return { timeLeft: todo, progress: progress };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Paper
      elevation={5}
      style={{
        margin: "1rem auto",
        padding: "1rem",
        width: "90%",
      }}
    >
      <h2>{title}</h2>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ marginLeft: "-2%" }}>Start: {startDate}</p>
        <p style={{ marginRight: "-2%" }}>End: {endDate}</p>
      </Container>
      <LinearProgress variant="determinate" value={timeLeft.progress} />
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ marginLeft: "-2%" }}>
          {Math.floor(timeLeft.timeLeft / (1000 * 60 * 60 * 24))} days left!
        </p>
        <p style={{ marginRight: "-2%" }}>{timeLeft.progress}%</p>
      </Container>
    </Paper>
  );
};

export default Countdown;
