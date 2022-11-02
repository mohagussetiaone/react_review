import React, { useState } from "react";

export default function CondRendering() {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  // toggle function
  const toggleShow = () => {
    setShow(!show);
  };

  if (loading) {
    return <div>Loading Please Wait...</div>;
  }

  return (
    <div>
      {/* {show === true ? <h1>Show Me</h1> : null} */}
      {show && <h1>Show / Hide Me</h1>}
      <button onClick={toggleShow}>Toggle</button>
    </div>
  );
}
