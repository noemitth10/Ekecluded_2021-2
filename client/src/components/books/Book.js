import React,{useState} from 'react';
import "./Books.css";
import BookCover from "../../images/book_cover.jpg";
import { Link } from "react-router-dom";

function Book (props) {
    const [book, SetBook] = useState({
        book_id : props.location.state.book_id,
        title: props.location.state.title,
        description: props.location.state.description,
        language: props.location.state.language,
        pages: props.location.state.pages,
        type: props.location.state.type,
        cost: props.location.state.cost
    });
    const AddShoppingCart = () => {
        let book_element = {}, oldBooks = {}, cart = [];
    book_element.id = book.book_id;
    book_element.title = book.title;
    book_element.price = book.price;
    oldBooks = localStorage.getItem("shoppingCart");
    oldBooks = JSON.parse(oldBooks);
    console.log("Előző tartalom: ", oldBooks);
    cart.push(oldBooks);
    cart.push(book_element);
    localStorage.setItem("shoppingCart", JSON.stringify([...cart]));
    console.log("Új tartalom: ", JSON.parse(localStorage.shoppingCart))
      }
    const deleteBook = async book_id => {
        try {
            const response = await fetch(`http://localhost:5000/books/${book_id}`, {
                    method: "DELETE",
                    'Content-Type': 'application/json'
            });
            console.log(response);
            alert("A könyv sikeresen törölve!");
        } catch (error) {
            console.error(error.message)
        }
    }

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
                <div className="buttonContainer">
                <button type="button" class="btn btn-primary" onClick={() => AddShoppingCart()}>Kosárba</button>
            <button type="button" class="btn btn-danger" onClick={() => deleteBook(props.location.state.book_id)}>Törlés</button>
            <button className="btn btn-warning"><Link 
            to={{
                pathname: `/edit_book-${book.book_id}`,
                state: { book : book }
                }}
            >Szerkesztés</Link></button>
            </div>
            </div>
            

        </div>
        </>
    )
}

export default Book;