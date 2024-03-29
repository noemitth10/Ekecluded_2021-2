import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import Book from './Book';
import "./Books.css";

function ListBooks(){
    const [books, setBooks] = useState([]);

    async function ListBooks() {
        try {
            const response = await fetch("http://localhost:5000/books", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const jsonData = await response.json()

            setBooks(jsonData)
            console.log(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        ListBooks();
    },[]) 

return(
    <>
    <h1>Összes könyv</h1>
    {
        books.map((book) => (
            <p><Link 
                to={{
                        pathname: `/book-${book.book_id}`,
                        state: { title: book.title, 
                        description: book.description,
                        book_id: book.book_id,
                        pages: book.pages,
                        language: book.language,
                        type: book.type,
                        cost: book.cost }
                    }}
            >{book.title}</Link></p>


        ))
    }
    </>
)
}


export default ListBooks;