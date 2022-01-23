
//IMPORTS

import { useState } from "react";

import Todo from './components/todoapp/Todo.js';
import Counter from './components/counter/Counter.js';

function App() { // this is a component.

  //JS Code

  //state in react -- this is an array, the variable count and the setcount
  // const [count, setCount] = useState(localStorage.getItem('count') || 0);

  // const addOne = () => {
  //   setCount(count + 1);
  //   localStorage.setItem('count', count + 1)
  // }

  // () => function(parameters), this is called an anonymous function
  // this is all client side

  return ( // returns JSX -- React's HTML/JS?
    <div className="App">
      <Todo/>
      <Counter/>
    </div>
  );
}

export default App;