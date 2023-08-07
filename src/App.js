
import './App.css';
import Button from './Components/Button';
import ButtonBox from './Components/ButtonBox';
import Screen from './Components/Screen';
import Wrapper from './Components/Wrapper';

const btnValues = [
  ["C", "+-","%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0,".", "="],
];

function App() {
  return (
    <div className="App">
     <Wrapper>
      <Screen/>
      <ButtonBox>
        {
          btnValues.flat().map((btn , i) =>(
            <Button value = {btn} key={i}/>
          ))
        }
        
      </ButtonBox>
     </Wrapper>
    </div>
  );
}

export default App;
