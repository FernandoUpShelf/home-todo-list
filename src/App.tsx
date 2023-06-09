import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import Header from "./Header";
import ToDoList from "toDoList/ToDoList"

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <ToDoList />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
