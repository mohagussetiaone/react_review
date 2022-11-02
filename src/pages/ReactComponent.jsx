// sebuah function yang mer Return sebuah element
import React from "react";

function MyButton() {
  return <button>Click Button</button>;
}

export default function ReactComponent() {
  return (
    <div>
      <h1>Ini merupakan component jsx</h1>
      <MyButton />
    </div>
  );
}
