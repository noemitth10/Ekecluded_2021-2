import React from 'react';

function Book (props) {
    return(
        <>
        <div>
            <p>Cím: {props.location.state.title}</p>
            <p>Leírás: {props.location.state.description}</p>
        </div>
        </>
    )
}

export default Book;