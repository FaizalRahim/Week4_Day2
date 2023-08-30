import React, { useState } from 'react';

function App() {
  // Task 1: Create an array of objects and update its second index
  const [fruit, setFruit] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Pear' },
    { id: 3, name: 'Orange' },
  ]);

  const updateFruit = () => {
    const updatedFruit = [... fruit];
    updatedFruit[1] = { id: 2, name: 'Durian' };
    setFruit(updatedFruit);
  };

  // Task 2: Create an object, update its 2 property values
  const [juice, setJuice] = useState({
    property1: 'Blended',
    property2: 'Ice Blended',
    property3: 'Squeezed',
  });

  const updateJuice = () => {
    setJuice({
      ...juice,
      property1: 'Freshly Blended',
      property2: 'Frappe',
    });
  };

  // Task 3: Practice all data types for state variables
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello, Hooks!');
  const [isTrue, setIsTrue] = useState(true);
  const [floatNumber, setFloatNumber] = useState(3.14);
  const [list, setList] = useState([1, 2, 3]);
  const [nestedObject, setNestedObject] = useState({ prop: 'Nested' });

  

  return (
    <div>
      <h1>Fruit</h1>
      <button onClick={updateFruit}>Update Fruit</button>
      <button onClick={updateJuice}>Update Juice</button>
      
      <p>Fruit:</p>
      <ul>
        {fruit.map((obj, index) => (
          <li key={index}>{`${obj.id}: ${obj.name}`}</li>
        ))}
      </ul>
      
      <p>Juice:</p>
      <p>{`property1: ${juice.property1}, property2: ${juice.property2}, property3: ${juice.property3}`}</p>
      
      <p>Data Types:</p>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <p>Is True: {isTrue.toString()}</p>
      <p>Float Number: {floatNumber}</p>
      <p>List: {list.join(', ')}</p>
      <p>Nested Object: {nestedObject.prop}</p>
    </div>
  );
}

export default App;

