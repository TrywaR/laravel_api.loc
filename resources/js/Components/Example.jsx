import React, { useState } from 'react';

const Example = () => {
   const [message, setMessage] = useState('Hello, React in Laravel!');

   return (
      <div>
         <p>{message}</p>
         <button onClick={() => setMessage('Clicked!')}>Click me</button>
      </div>
   );
};

export default Example;
