import React from "react";

const sleep = (time) => {
  const done = Date.now() + time;
  while (done > Date.now()) {
    // sleep...
  }
};

// Imagine that this slow component is actually slow because it's rendering a lot of data (for example).
const SlowComponent = ({ time, onChange }) => {
  sleep(time);

  return (
    <div>
      That was{" "}
      <input
        value={time}
        type='number'
        onChange={(e) => onChange(Number(e.target.value))}
      />{" "}
      ms slow
    </div>
  );
};

const Name = ({ time, name, onChange }) => {
  return (
    <div>
      <label htmlFor='name'>Enter a name</label>{" "}
      <input
        id='name'
        value={name}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>
        {" "}
        {name ? `${name}'s favorite number is ${time}.` : "enter a name"}
      </span>
    </div>
  );
};

export default function StateColocationDemo() {
  const [name, setName] = React.useState("");
  const [time, setTime] = React.useState(200);

  return (
    <div>
      <Name time={time} name={name} onChange={setName} />
      <SlowComponent time={time} onChange={setTime} />
    </div>
  );
}
