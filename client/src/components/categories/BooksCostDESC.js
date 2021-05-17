import React, {useState, useEffect} from 'react';
import '../../BooksInCategory.css';
import { useHistory } from 'react-router-dom';

function BooksCostDESC(props) {

    useEffect(() => {
        fetchResults();
    }, []);
    
    const [results, setResults] = useState([]);
    
    const fetchResults= async () => {
        try {
        const data = await fetch(`http://localhost:5000/books_cost_desc/${props.location.state.id}`,{
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

    let history = useHistory();

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
                    <option value="cost_asc">Árszerint Növekvő Sorrendben</option>
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
                        {result.title}<br/>
                        {result.cost} Ft
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BooksCostDESC;