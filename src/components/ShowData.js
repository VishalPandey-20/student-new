import React, { useEffect, useState } from 'react'
import { showFun } from './Global'
import './showData.css'
const ShowData = () => {
  // console.log(showFun(), "allDataallDataallData");
  const editFun = (e) => {
    // e.preventDefault();
    console.log("I am clicked...!", e.target.id);
    console.log(showFun()[e.target.id], "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
  }
  const deleteFun = (e) => {
    console.log("I am clicked delete btn...!", e.target.id);
  }
  const [localDatas, setLocalDatas] = useState([]);
  useEffect(() => {
    let localData = localStorage.getItem("data");
      localData = JSON.parse(localData) || [];
      let sessData = sessionStorage.getItem("data");
      sessData = JSON.parse(sessData) || [];
      const allData = [...localData, ...sessData]
      setLocalDatas(allData)
  }, [])
  return (
    <div>
      {
        localDatas.map((itm, ind) => <div className="show" key={ind}>
          <div className="space">Name - {itm.Name}</div>
          <div className="space">Roll - {itm.Roll}</div>
          <div className="space">Subject - {itm.Subject}</div>
          <div className="space">Storage - {itm.Storage}</div>
          <div>Number - {ind}</div>
          <div className="btn">
            <div>
              <button className="edit" onClick={editFun} id={ind}>edit</button>
            </div>
            <div>
              <button className="delete" onClick={deleteFun} id={ind}>delete</button>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default ShowData
