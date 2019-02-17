// import React, { useState } from 'react';

// const ScrollToTopButton = () => {
//     const [intervalId, scrollStep] = useState(0);
//     return (
//         <div>
//             <h1>{intervalId}</h1>
//             <button onClick={() => scrollStep(intervalId + 1)}>«Back to Top» </button>
//         </div>
//     );
// };

// export default ScrollToTopButton;

import React, { useState } from 'react';

function ScrollToTopButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ScrollToTopButton;

