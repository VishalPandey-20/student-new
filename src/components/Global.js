
export const showFun = ()=>{
  let localData = localStorage.getItem("data");
  localData = JSON.parse(localData) || [];
  let sessData = sessionStorage.getItem("data");
  sessData = JSON.parse(sessData) || [];
  const allData = [...localData,...sessData]
  return allData
}
        