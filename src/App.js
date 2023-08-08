import './App.css';
import React,{useState} from './react'
function App() {

  return (
    <div className="container">
       <div className="calculator">
        <form action="">
          <div className="screen">
            <input type="text"/>
          </div>
          <div className="btns">
            <input type="button" value="AC"/>
            <input type="button" value="DE"/>
            <input type="button" value="."/>
            <input type="button" value="/"/>
          </div>
          <div className="btns">
            <input type="button" value="7"/>
            <input type="button" value="8"/>
            <input type="button" value="9"/>
            <input type="button" value="x"/>
          </div>
          <div className="btns">
            <input type="button" value="4"/>
            <input type="button" value="5"/>
            <input type="button" value="6"/>
            <input type="button" value="+"/>
          </div>
          <div className="btns">
            <input type="button" value="1"/>
            <input type="button" value="2"/>
            <input type="button" value="3"/>
            <input type="button" value="-"/>
          </div>
          <div className="btns">
            <input type="button" value="00"/>
            <input type="button" value="0"/>
            <input type="button" value="="/>
    
          </div>
        </form>
       </div>
    </div>
  );
}

export default App;
