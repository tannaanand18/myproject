// import {
//   BrowserRouter, 
//   Routes, 
//   Route
// } from 'react-router-dom'
// import 'remixicon/fonts/remixicon.css'
// import Home from './components/Home'
// import Teachers from './components/Teachers'
// import Holidays from './components/Holidays'
// import ContactUs from './components/ContactUs'
// import NotFound from './components/NotFound'

// const App = ()=>{
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/teachers" element={<Teachers />} />
//         <Route path="/holidays" element={<Holidays />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default App

//     import React, { useState } from 'react';

//     function Counter() {
//       const [count, setCount] = useState(0);

//       const increment = () => {
//         setCount(count + 1);
//       };

//       const decrement = () => {
//         setCount(count - 1);
//       };

//       const reset = () => {
//         setCount(0);
//       }

//       return (
//         <div>
//           <h2>Counter: {count}</h2>
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//           <button onClick={reset}>Reset</button>
//         </div>
//       );
//     }

//     export default Counter;


// import React, { useState } from 'react';

// function MyComponent() {
//   // State 1: A boolean to track if something is active
//   const [isActive, setIsActive] = useState(false);

//   // State 2: A numerical counter
//   const [count, setCount] = useState(0);

//   const toggleActive = () => {
//     setIsActive(!isActive);
//   };

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Is Active: {isActive ? 'Yes' : 'No'}</p>
//       <button onClick={toggleActive}>Toggle</button>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// export default MyComponent;

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  console.log(message);
}