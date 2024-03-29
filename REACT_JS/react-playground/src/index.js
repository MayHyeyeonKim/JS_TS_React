import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Library from './chapter_03/Library';
// import Clock from "./chapter_04/Clock";
// import CommentList from "./chapter_05/CommentList";
// import NotificationList from './chapter_06/NotificationList';
// import Accommodate from "./chapter_07/Accommodate";
// import ConfirmButton from './chapter_08/ConfirmButton'
// import ConfirmButton2 from "./chapter_08/ConfirmButton2";
// import LandingPage from "./chapter_09/LandingPage";
// import AttendanceBook from "./\bchapter_10/AttendanceBook";
// import SignUp from "./chapter_11/SignUp";
// import Calculator from './chapter_12/Calculator';
// import ProfileCard from "./chapter_13/ProfileCard";
import DarkOrLight from "./chapter_14/DarkOrLight";

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      {/* <Library/> */}
      {/* <Clock /> */}
      {/* <CommentList /> */}
      {/* <NotificationList /> */}
      {/* <Accommodate /> */}
      {/* <ConfirmButton2 /> */}
      {/* <LandingPage /> */}
      {/* <AttendanceBook /> */}
      {/* <SignUp /> */}
      {/* <Calculator /> */}
      {/* <ProfileCard /> */}
      <DarkOrLight />
    </React.StrictMode>,
    document.getElementById("root")
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
