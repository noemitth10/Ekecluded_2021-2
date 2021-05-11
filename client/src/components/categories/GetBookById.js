import React, {useState, useEffect} from 'react';

function GetBookById({ id }) {
    
    useEffect(() => {
        fetchResults();
    }, []);
    
    const [results, setResults] = useState([]);
    
    const fetchResults= async () => {
        const data = await fetch('http://localhost:5000/books/' + id);
        
        const results = await data.json();
        console.log(results);
        setResults(results);
    }
    
    return (
        <>
        <div className="allInformation">
            {results.map((result, index) => (
                <p key={index}>
                    Cím: {result.title}<br/>
                    Leírás: {result.description}<br/>
                    <img src={result.image} alt={result.title}/><br/>
                    Oldalszám: {result.pages}<br/>
                    Nyelv: {result.language}<br/>
                    Típus: {result.type}<br/>
                    Ár: {result.cost}
                </p>
            ))}
        </div>
        <div className="someInformation">
            {results.map((result, index) => (
                <p key={index}>
                    Cím: {result.title}<br/>
                    <img src={result.image} alt={result.title}/><br/>
                    Ár: {result.cost}
                </p>
            ))}
        </div>
        </>
  );
}

export default GetBookById;