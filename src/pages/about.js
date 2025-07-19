// import moment from 'moment-timezone'; // Import moment-timezone directly

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { toast } from "react-toastify";

const AboutPage = () => {
  const handleDownload = () => {
    const toastId = toast.info("Message", {
      autoClose: false,
    });

    setTimeout(() => {
      toast.update(toastId, {
        render: "Change",
        autoClose: 3000,

        onClose: () => {
          console.log("close");
        },
      });
    }, 2000);

    console.log(toastId, "gtoastId");
  };

  /**
   * accept time in both format 12 or 24
   * am/pm: for 12hr mandatory, for 24hr non mandatory
   * @param {start:string, end:string}
   * @return {boolean}
   *
   */
  // const isTimeBetween = (start, end) => {
  //   const now = moment.tz("Asia/Kolkata")()
  //   // const startTime = moment.tz("Asia/Kolkata")(start, 'hh:mm A');
  //   // const endTime = moment.tz("Asia/Kolkata")(end, 'hh:mm A');

  //   const startTime = moment.tz("Asia/Kolkata").set({ hour: 8, minute: 20});
  //     const endTime = moment.tz("Asia/Kolkata").set({ hour:9, minute: 20 });

  //   console.log(now.format("hh:mm A"),"now")

  //   return now.isBetween(startTime, endTime);
  // }

  // console.log(isTimeBetween("07:30 am","8:10 am"),"12hr")
  // console.log(isTimeBetween("19:30","20:20"),"24hr")

  const [selectedDate, setSelectedDate] = useState(null);
  const [displayDate, setDisplayDate] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const handleClearAndShowDate = () => {
    if (selectedDate) {
      setDisplayDate(selectedDate.toString());
    } else {
      setDisplayDate("No date selected");
    }
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        dateFormat="Pp"
        placeholderText="Click to select date"
      />

      <input type={"date"} placeholder="Date" />
      <button
        onClick={handleClearAndShowDate}
        style={{
          marginLeft: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        ✖️
      </button>

      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default AboutPage;
