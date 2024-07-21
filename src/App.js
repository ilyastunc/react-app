
import { useState } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

function App() {
  //props için kullanıldı.
  const userName1 = "İlyas"

  //map için kullanıldı.
  const arr = [
    {name:"array1", id:1},
    {name:"array2", id:2},
    {name:"array3", id:3},
  ]

  console.log(arr)

  const [count, setCount] = useState(0)

  const clickFunction = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    return
  }
  return (
    <div className="App">
      {/* props */}
     <HelloWorld userName={userName1}/> 

     {/* click */}
     <button onClick={clickFunction}>Click</button> 

    {/* map */}
    {
      arr.map((ar, i) => (
        //aşağıdaki iki türlü de oluyor. 
        //<div key={i}>{ar.name}</div>
        <div key={ar.id}>{ar.name}</div>
      ))
    }

    {count}

    </div>
  );
}

export default App;
