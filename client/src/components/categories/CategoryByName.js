import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

function CategoryByName( { match }) {

    useEffect(() => {
        console.log(match);
    }, []);

    return (
        <div>
            <h3>{match.params.category_name}</h3>
        </div>
    );
}

export default CategoryByName;