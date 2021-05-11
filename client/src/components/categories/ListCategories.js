import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function ListCategories() {

    const [categories, setCategories] = useState([]);

    async function list() {
        try {
            const response = await fetch('http://localhost:5000/category', {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const jsonData = await response.json();

            setCategories(jsonData);
            console.log(jsonData);

        } catch(error){
            console.error(error.message);
        }
    }

    useEffect(() => {
        list();
    }, [])

    return (
        <div>
        {
            categories.map((category) => (
                <ul key={category.category_id} className="categoryList">
                    <Link className="category-links" to={`/category/${category.category_id}/${category.category_name}`}>
                    <li>
                        {category.category_name}
                    </li>
                    </Link>
                </ul>
            ))
        }
        </div>
    );
}

export default ListCategories;