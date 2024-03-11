import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffect from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";
import ContextDemoApp from "./exercises/ContextDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView === "info" ? (
              <p>All exercises for React day-1</p>
            ) : null}
            {selectedView === "props1" ? (
              <Propsdemo title="Props demo 1" />
            ) : null}
            {selectedView === "list" ? <ListDemo title="List Demo" /> : null}
            {selectedView === "event" ? <EventDemo title="Event Demo" /> : null}
            {selectedView === "forms" ? (
              <FormUncontrolled title="Forms Demo" />
            ) : null}
            {selectedView === "state1" ? (
              <StateDemo1 title="State Demo 1" />
            ) : null}
            {selectedView === "state2" ? (
              <StateDemo2 title="State Demo 2" />
            ) : null}
            {selectedView === "state3" ? (
              <StateDemo3 title="State Demo 3" />
            ) : null}
            {selectedView === "effect" ? (
              <UseEffect title="Effect Demo" />
            ) : null}
            {selectedView === "fetch" ? <FetchDemo title="Fetch Demo" /> : null}
            {selectedView === "liftingState" ? (
              <LiftingState title="Lifting State" />
            ) : null}
            {selectedView === "contextDemo" ? (
              <ContextDemoApp title="Context Demo App" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};

const Buttons = ({ onSelected: handleSelected }: ButtonProps) => {
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list")}>
        List Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("event")}>
        Event Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("forms")}>
        Forms Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state1")}>
        State Demo 1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state2")}>
        State Demo 2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state3")}>
        State Demo 3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("effect")}>
        Effect Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetch")}>
        Fetch Demo
      </button>
      <button
        className="btn-w100"
        onClick={() => handleSelected("liftingState")}
      >
        Lifting State Demo
      </button>
      <button
        className="btn-w100"
        onClick={() => handleSelected("contextDemo")}
      >
        Context Demo
      </button>
    </>
  );
};
