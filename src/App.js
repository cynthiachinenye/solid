import './App.css';
import React,{useState} from 'react'


function App() {
const [cal,setCal] = useState("")
  return (
    <div className="container">
       <div className="calculator">
        <form action="">
          <div className="screen">
            <input type="text" value={cal}/>
          </div>
          <div className="btns">
            <input type="button" value="AC" onClick={e => setCal("")}/>
            <input type="button" value="DE" onClick={e => setCal(cal.slice(0,-1))}/>
            <input type="button" value="." onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="/" onClick={e => setCal(cal + e.target.value)}/>
          </div>
          <div className="btns">
            <input type="button" value="7" onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="8"onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="9" onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="*" onClick={e => setCal(cal + e.target.value)}/>
          </div>
          <div className="btns">
            <input type="button" value="4" onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="5" onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="6" onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="+" onClick={e => setCal(cal + e.target.value)}/>
          </div>
          <div className="btns">
            <input type="button" value="1" onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="2" onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="3" onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="-" onClick={e => setCal(cal + e.target.value)}/>
          </div>
          <div className="btns">
            <input type="button" value="00" onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="0" onClick={e => setCal(cal + e.target.value)}/>
            <input type="button" value="=" className="equal" onClick={e => setCal(eval(cal))}/>
    
          </div>
        </form>
       </div>
    </div>
  );
}

export default App;
