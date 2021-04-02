import React from 'react';

function Book ({title, description}) {
    return(
        <>
        <div>
            <p>Cím: {title}</p>
            <p>Leírás: {description}</p>
        </div>
        </>
    )
}

export default Book;