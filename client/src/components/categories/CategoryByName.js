import React, {useState, useEffect} from 'react';
import GetBookById from './GetBookById';
import './CategoryByName.css';

function CategoryByName( { match }) {

    useEffect(() => {
        fetchResults();
        console.log(match);
    }, []);
    
    const [results, setResults] = useState([]);
    
    const fetchResults= async () => {
        try {
        const data = await fetch(`http://localhost:5000/books_category/${match.params.category_id}`,{
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
            <h3>{match.params.category_name}</h3>
                {results.map((result, index) => (
                    <GetBookById id={result.book_id} key={index}/>
                ))}
        </div>
    );
}

export default CategoryByName;