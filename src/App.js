import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    const [clicks, setClicks] = useState(1);
    const [secClick, setSecClick] = useState(1);
    const [intervals, setIntervals] = useState(null);
    const [price1, setPrice1] = useState(20);
    const [price2, setPrice2] = useState(60);


    function addClicks() {
      setCounter((prevClicks) => {
        return prevClicks + clicks;
      })
    }

    function upgrade1() {
      if (counter >= price1) {
        setClicks(() => {
          return clicks + 1;
        })
        setCounter((prevClick) => {
          return prevClick - price1;
        })
        setPrice1((prevPrice) => {
          return prevPrice * 2;
        })
        return alert('+1 click added');
      } else {
        alert('Not enough clicks!');
      }
    }

    function upgrade2() {
      if (counter > price2) {
        clearInterval(intervals)

        setSecClick((prevClicks) => {
          return prevClicks + 1;
        })
      
        const perSec =  setInterval(() => {
          setCounter((prevClick) => {
            return prevClick + secClick;
          });
        }, 1000);

        setIntervals(perSec);

        setPrice2((prevPrice) => {
          return prevPrice * 2;
        })

        alert('+1 click per second added')
      } else {
        alert('Not enough clicks!');
      }
    }
  
  return (
    <div className="App">
     <h1>{counter} Clicks</h1>
     <h3>{clicks}: per click</h3>
     <h3>{secClick - 1}: Clicks per second</h3>
     <button className='clickBtn' onClick={addClicks}>Click</button>
     <div className='priceContainer'>
     <p>{price1} Clicks</p>
     <p>{price2} Clicks</p>
     </div>
     <div className='container'>
      <button className='upgradeBtn' onClick={upgrade1}>+1 per click</button>
      <button className='upgradeBtn' onClick={upgrade2}>+1 click per second</button>
     </div>
     
    </div>
  );
}

export default App;
