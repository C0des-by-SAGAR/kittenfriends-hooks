import React from 'react';

const Searchbox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input
            type = "search"
            id="search"
            className = "tc ba pa2 b--green bg-lightest blue"
            placeholder = "search kittens"
            onChange = {searchChange}
            />
        </div>
    );
}

export default Searchbox;