import React, { useState, useEffect } from 'react';
import Searchbox from '../components/Searchbox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
    const [ robots, setRobots ] = useState([]);
    const [ searchfield, setSearchfield ] = useState('');

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)})
    },[]) 

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredKittens = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robots.length ?
    <h1 className="tc"> LOADING.... </h1> :
    (
        <div className='tc'>
            <div className='pa2'>
                <h1 className='f1'>KittenFriends</h1>
                <Searchbox searchChange={ onSearchChange } />
            </div>
            <Scroll>
                <CardList robots={filteredKittens} />
            </Scroll>
        </div>
    )
}

export default App;