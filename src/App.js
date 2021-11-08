import React from "react";
import ShowData from "./components/ShowData";
import SignUp from "./components/SignUp";
import './style.css';
function App() {
  return (
    <div>
      <h1>welcome student form</h1>
      <div className="container">
        <SignUp />
        <div className='shows'>
          <ShowData />
        </div>
      </div>
    </div>
  );
}

export default App;
