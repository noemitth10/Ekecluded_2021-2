import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import Book from './Book';


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
            <Book title={book.title} description={book.description}/>

        ))
    }
    </>
)
}


export default ListBooks;