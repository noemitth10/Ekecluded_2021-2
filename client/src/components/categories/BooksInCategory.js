import React, {useState, useEffect} from 'react';
import '../../BooksInCategory.css';
import { useHistory} from 'react-router-dom';
import bookCover from "../../images/book_cover.jpg";
import { Link } from 'react-router-dom';

function BooksInCategory( props) {

    useEffect(() => {
        fetchResults();
    }, []);
    
    const [results, setResults] = useState([]);
    let history = useHistory();
    
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
    
    function handleChange(value) {
        history.push({pathname: `/category/${props.location.state.name}/${value}`,
        state: { id: props.location.state.id, name: props.location.state.name}});
    }

    return(
        <div>
            <div className="head">
                <h3>{props.location.state.name}</h3>
                <div className="selection">
                <select name="arrange" id="arrange" onChange={event => handleChange(event.target.value)}>
                    <option value="arrange">Rendezés</option>
                    <option value="cost_asc" >Árszerint Növekvő Sorrendben</option>
                    <option value="cost_desc">Árszerint Csökkenő Sorrendben</option>
                    <option value="title_asc">Címszerint Növekvő Sorrendben</option>
                    <option value="title_desc">Címszerint Csökkenő Sorrendben</option>
                </select>
                </div>
            </div>
            <hr/>
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
                                cost: result.cost }}}>
                                {result.title}
                        </Link><br/>
                        {result.cost} Ft
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BooksInCategory;