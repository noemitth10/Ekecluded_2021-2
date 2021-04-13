import React from 'react';
import "./Books.css";
import BookCover from "../../images/book_cover.jpg";

function Book (props) {
    return(
        <>
        <div className="bookContainer">
            <div className="bookContainerLeft">
            <img src={BookCover} className="bookImage" alt="Könyv borító"/>
            </div>
            <div className="bookContainerRight">
                <h2>Cím: {props.location.state.title}</h2>
                <p>Leírás: {props.location.state.description}</p>
                <p>Oldalszám: {props.location.state.pages}</p>
                <p>Nyelv: {props.location.state.language}</p>
                <p>Típus: {props.location.state.type}</p>
                <p>Ár: {props.location.state.cost}</p>
            </div>
            <button type="button" class="btn btn-primary">Kosárba</button>
        </div>
        </>
    )
}

export default Book;