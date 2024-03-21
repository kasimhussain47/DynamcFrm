import React, { useRef } from 'react';

function UseRef() {
  // Step 1: Create a ref using useRef
  const myRef = useRef();

  // Step 3: Define a function to handle the onClick event
  const handleClick = () => {
    // Step 4: Access the value stored in the ref
    const value = myRef.current.value;
    console.log(value); // Print the value to the console
    // You can perform any other action with the value here
  };

  return (
    <div>
      {/* Step 2: Attach the ref to the element */}
      <input ref={myRef} type="text" />
      {/* Step 2 (continued): Attach onClick event handler */}
      <button onClick={handleClick}>Print Value</button>
    </div>
  );
}

export default UseRef;
