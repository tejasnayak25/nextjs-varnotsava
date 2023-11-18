// YourComponent.js
"use client";
import { useState } from 'react';

const YourComponent = () => {
  const [responseId, setResponseId] = useState(null);

  return (
    <div>
      <button>Submit Form</button>
      {responseId && <p>Form response created. Response ID: {responseId}</p>}
    </div>
  );
};

export default YourComponent;
