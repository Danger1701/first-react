import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));



function Input() {
  const [msg, setMsg] = useState("");
  const [num, setNum] = useState(0)

  useEffect(()=> console.log("render"), [num])

  return (<>
    <input onChange={e=>(setMsg(e.target.value))} />
    <button onClick={()=>{
      alert("pelotudo dice :"+msg)}}>Save</button>
      <hr/>
      <h1>Counter: {num}</h1>
      <button onClick={()=>setNum(num+1)}>
        ADD
      </button>
  </>)
}

root.render(<>
  <Input/>
</>);
