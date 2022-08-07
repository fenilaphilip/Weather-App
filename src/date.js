import React from "react";

export default function FormattedDate(props) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    " March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septemper",
    "October",
    "November",
    "December",
  ];
  let day = now.getDay(props.Date);
  let date = now.getDate(props.Date);
  let month = now.getMonth(props.Date);
  let ordinal = "";
  if (date === 1 || date === 21 || date === 31) {
    ordinal = "st";
  } else {
    if (date === 2 || date === 22) {
      ordinal = "nd";
    } else {
      if (date === 3 || date === 23) {
        ordinal = "rd";
      } else {
        ordinal = "th";
      }
    }
  }
  let hour = now.getHours(props.Date);
  let minute = now.getMinutes(props.Date);
  let time = ``;
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let hourIn12Format = "";
  if (hour > 12) {
    hourIn12Format = hour - 12;
    if (hourIn12Format < 10) {
      time = `0${hourIn12Format}:${minute} PM`;
    } else {
      time = `${hourIn12Format}:${minute} PM`;
    }
  } else {
    hourIn12Format = hour;
    if (hourIn12Format < 10) {
      time = `0${hourIn12Format}:${minute} AM`;
    } else {
      time = `${hourIn12Format}:${minute} AM`;
    }
  }
  return (
    <div>
      {days[day]} {date}
      {ordinal} {months[month]} {time}
    </div>
  );
}
