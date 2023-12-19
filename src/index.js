import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./header";
import Student from "./Student";
import Footer from "./Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="" style={{backgroundColor:"black"}}>
    <Header />
    <MainBody />
    <div className="container row mx-2 text-white">Student Enrolled</div>
    <Student
      experience={3}
      name="Rene Pne"
      headshot="https://api.lorem.space/image/face?w=150&h=152"
    />
    <Student
      experience={4}
      name="David Kem"
      headshot="https://api.lorem.space/image/face?w=150&h=153"
    />
    <Student
      experience={5}
      name="Angel Priya"
      headshot="https://api.lorem.space/image/face?w=150&h=154"
    />
    <Footer />
  </div>
);
