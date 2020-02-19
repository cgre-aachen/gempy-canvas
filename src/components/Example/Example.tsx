import React, { useState, useEffect } from "react";

function Example() {
  // state
  // Types via Type inference;
  const [count, setCount] = React.useState(0);

  // side effects (data fetching, subscriptions, or manually changing the DOM)
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
