import {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState([0]);

    const changeCounterBy = (amount) => {
        setCounter(parseInt(counter) + amount);
    } 

    return (
        <div className = 'flexbox column center'>
            <h1>{counter}</h1>
            <br/>
            <button onClick = {() => changeCounterBy(1)}>+1</button>
            <br/>
            <button onClick = {() => changeCounterBy(-1)}>-1</button>
            <br/>
        </div>
    );
}

export default Counter;