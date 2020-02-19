import React, { useEffect } from "react";

// https://thoughtbot.com/blog/using-redux-with-react-hooks

function Example() {
  // state variable, initialized to 0
  const [count, setCount] = React.useState(0);

  // side effects (data fetching, subscriptions, or manually changing the DOM)
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default Example;
