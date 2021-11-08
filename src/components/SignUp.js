import React, { useState } from 'react'
import './SignUp.css'
import { showFun } from './Global'
import { useEffect } from 'react/cjs/react.development';
const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [roll, setRoll] = useState('');
  const [subject, setSubject] = useState('');
  const [storeage, setStoreage] = useState('localStorage');
  // check roll number....!
  const funRoll = () => {
    let localData = localStorage.getItem("data");
    localData = JSON.parse(localData) || [];
    const allRollNumber = []
    localData.map((itm) => {
      allRollNumber.push(itm.Roll)
    })
    let sessData = sessionStorage.getItem("data");
    sessData = JSON.parse(sessData) || [];
    sessData.map((itmSess) => {
      allRollNumber.push(itmSess.Roll)
    })
    return allRollNumber;
  }
  // ............
  // get data from storage...!
  let localData = localStorage.getItem("data");
  localData = JSON.parse(localData) || [];
  let sessData = sessionStorage.getItem("data");
  sessData = JSON.parse(sessData) || [];
// ......
  const [allDataLocl] = useState(localData);
  const [allDataSess] = useState(sessData);
  const submitHandler = (e) => {
    e.preventDefault();
    if (roll > 0 && !funRoll().includes(roll)) {
      if (storeage === 'localStorage') {
        const obj = {
          Name: userName,
          Roll: roll,
          Subject: subject,
          Storage: storeage
        }
        allDataLocl.push(obj);
        // setAllDataLocl(allDataLocl.push(obj));
        console.log(allDataLocl, "allDataallDataallData");
        localStorage.setItem("data", JSON.stringify(allDataLocl));
        setUserName('');
        setRoll('');
        setSubject('');
      }
      if (storeage === 'SeasionStorage') {
        const obj = {
          Name: userName,
          Roll: roll,
          Subject: subject,
          Storage: storeage
        }
        allDataSess.push(obj);
        // setAllDataSess(allDataSess.push(obj));
        sessionStorage.setItem("data", JSON.stringify(allDataSess));
        setUserName('')
        setRoll('')
        setSubject('')
      }
    } else {
      alert("Please check your data...!");
      setUserName('')
      setRoll('')
      setSubject('')
    }
  }

return (
    <div>
      <form action="">
        <div>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} autoComplete="off" name="userName" id="userName" placeholder="Enter your Name...!" />
        </div>
        <div>
          <input type="number" value={roll} onChange={(e) => setRoll(e.target.value)} autoComplete="off" name="rollNo" id="rollNo" placeholder="Enter your Roll-no...!" />
        </div>
        <div>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} autoComplete="off" name="Subject" id="Subject" placeholder="Subject" />
        </div>
        <div>
          <select name="storage" value={storeage} onChange={(e) => setStoreage(e.target.value)} autoComplete="off" id="store">
            <option>localStorage</option>
            <option>SeasionStorage</option>
            {/* <option>cookies</option> */}
          </select>
        </div>
        <div>
          <button onClick={submitHandler}>submit</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;