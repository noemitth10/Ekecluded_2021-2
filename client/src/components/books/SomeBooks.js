import React, {useEffect, useState} from 'react';
import '../../SomeBooks.css';
import bookCover from '../../images/book_cover.jpg';
import { Link } from 'react-router-dom';

function SomeBooks() {
    useEffect(() => {
        fetchResults();
    }, []);
    
    const [results, setResults] = useState([]);
    
    const fetchResults= async () => {
        try {
        const data = await fetch('http://localhost:5000/someBooks',{
            method: "GET",
            headers: {token: localStorage.token}}
        );
        
        const results = await data.json();
        console.log(results);
        setResults(results);

        }catch(err){
            console.error(err.message);
        }
    }
  return (
      <div className="grid">
          {results.map((result, index) => (
              <div key={index}>
                  <img src={bookCover} alt={result.title} width="70" height="100"/><br/>
                  <br/>
                  <Link className="books-link" to={{
                        pathname: `/book-${result.book_id}`,
                        state: { title: result.title, 
                        description: result.description,
                        book_id: result.book_id,
                        pages: result.pages,
                        language: result.language,
                        type: result.type,
                        cost: result.cost }
                    }}>{result.title}</Link><br/>
                  <br/>
                  {result.cost} Ft
              </div>
          ))}
      </div>
  );
}

export default SomeBooks;