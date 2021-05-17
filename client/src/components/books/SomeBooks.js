import React, {useEffect, useState} from 'react';
import '../../SomeBooks.css';

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
                  {result.title}<br/>
                  <br/>
                  {result.cost} Ft
              </div>
          ))}
      </div>
  );
}

export default SomeBooks;