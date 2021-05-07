import React,{useState} from 'react';
import Book from './Book';


function EditBook(props) {
    const [inputs, setInputs] = useState({
        book_id : props.location.state.book.book_id,
        title: props.location.state.book.title,
        description: props.location.state.book.description,
        language: props.location.state.book.language,
        pages: props.location.state.book.pages,
        type: props.location.state.book.type,
        cost: props.location.state.book.cost
    });

    const {book_id, title, description, pages, language, type, cost} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]
        : e.target.value});
    }

    async function onSubmitForm(e) {
        e.preventDefault();
        console.log(inputs);

        try {
            const body = { title, description, pages, language, type, cost};

            const response = await fetch(`http://localhost:5000/books/${book_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response.data)
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
        <>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" className="form-control my-3" placeholder={title} value={title} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" className="form-control my-3" placeholder={description} value={description} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <label>Page Count</label>
                    <input type="number" name="pages" className="form-control my-3" placeholder={pages} value={pages} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <label>Language</label>
                    <input type="text" name="language" className="form-control my-3" placeholder={language} value={language} onChange={e => onChange(e)}/>
                </div>
                <select className="form-control" id="type" name="type" value={type} onChange={e => onChange(e)}>
                    <option value="Válasszon">Válasszon...</option>
                    <option value="Családregény">Családregény</option>
                    <option value="Dráma">Dráma</option>
                    <option value="Életrajz">Életrajz</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Gyermekregény">Gyermekregény</option>
                    <option value="Humor">Humor</option>
                    <option value="Képregény">Képregény</option>
                    <option value="Kisregény">Kisregény</option>
                    <option value="Krimi">Krimi</option>
                    <option value="Manga">Manga</option>
                    <option value="Regény">Regény</option>
                    <option value="Riport">Riport</option>
                    <option value="Romantikus">Romantikus</option>
                    <option value="Sci-fi">Sci-fi</option>
                    <option value="Történelmi">Történelmi</option>
                </select>
                <div>
                    <label>Cost</label>
                    <input type="number" name="cost" className="form-control my-3" placeholder={cost} value={cost} onChange={e => onChange(e)}/>
                </div>
                <button className="btn-left btn btn-success">
                    Mentés
                </button>
            </form>
        </>
    )
}

export default EditBook;