import React, {useState, useEffect} from 'react';

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
                    <li>{category.category_name}</li>
                </ul>
            ))
        }
        </div>
    );
}

export default ListCategories;