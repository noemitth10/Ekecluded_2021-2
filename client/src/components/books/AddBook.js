import React,{useState} from 'react';
import Book from './Book';
import "./Books.css";


function AddBook(){

    const [inputs, setInputs] = useState({
        title: undefined,
        description: undefined,
        language: undefined,
        pages: undefined,
        type: undefined,
        cost: undefined
    });

    const {title, description, pages, language, type, cost} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]
        : e.target.value});
    }


    async function onSubmitForm(e) {
        e.preventDefault();
        console.log(inputs);

        try {
            const body = { title, description, pages, language, type, cost};
            if(title == undefined || !title.replace(/\s/g, '').length) { document.getElementById("edit-book-title").style.display = "block"; return; }
            else { document.getElementById("edit-book-title").style.display = "none"; }
            console.log(body);
            const response = await fetch("http://localhost:5000/books", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response)
            alert("A könyv el lett mentve az adatbázisba!");
        } catch (error) {
            console.error(error.message);
        }
    }



    return(
        <>
            <form onSubmit={onSubmitForm}>
                <div>
                    <span id="edit-book-title" className="error-message">A cím mező nem lehet üres.</span>
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
                    <option value="Életmód, egészség">Életmód, egészség</option>
                    <option value="Ezotéria">Ezotéria</option>
                    <option value="Gasztronómia">Gasztronómia</option>
                    <option value="Gyermekek és szülők">Gyermekek és szülők</option>
                    <option value="Gyermek és ifúsági">Gyermek és ifúsági</option>
                    <option value="Hobbi">Hobbi</option>
                    <option value="Irodalom">Irodalom</option>
                    <option value="Kert és lakás">Kert és lakás</option>
                    <option value="Művészet">Művészet</option>
                    <option value="Lexikon, enciklopédia">Lexikon, enciklopédia</option>
                    <option value="Pénz, befektetés, üzlet">Pénz, befektetés, üzlet</option>
                    <option value="Sport">Sport</option>
                    <option value="Szakkönyv">Szakkönyv</option>
                    <option value="Számítástechnika">Számítástechnika</option>
                    <option value="Szórakoztató irodalom">Szórakoztató irodalom</option>
                    <option value="Szótár, nyelvkönyv">Szótár, nyelvkönyv</option>
                    <option value="Tankönyv, segédkönyv">Tankönyv, segédkönyv</option>
                    <option value="Társadalomtudomány">Társadalomtudomány</option>
                    <option value="Természettudomány">Természettudomány</option>
                    <option value="Történelem">Történelem</option>
                    <option value="Utazás">Utazás</option>
                    <option value="Vallás">Vallás</option>
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

export default AddBook;