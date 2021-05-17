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
                    <li>
                    <Link className="category-links"
                    to={{
                        pathname: `/category/${category.category_name}`,
                        state: { id: category.category_id, name: category.category_name}
                    }}>
                        {category.category_name}
                    </Link>
                    </li>
                </ul>
            ))
        }
        </div>
    );
}

export default ListCategories;