import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', scrollbarWidth: 'none',border: '5rem', height: '35rem' }}>
            {props.children}
        </div>
    )
}

export default Scroll;