import React, {useState, useEffect} from 'react';
import '../../BooksInCategory.css';

function BooksInCategory( props) {

    useEffect(() => {
        fetchResults();
    }, []);
    
    const [results, setResults] = useState([]);
    
    const fetchResults= async () => {
        try {
        const data = await fetch(`http://localhost:5000/booksInCategory/${props.location.state.id}`,{
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

    return(
        <div>
            <h3>{props.location.state.name}</h3>
            <hr/>
            <div className="grid">
                {results.map((result, index) => (
                    <div key={index}>
                        {result.title}<br/>
                        {result.cost} Ft
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BooksInCategory;