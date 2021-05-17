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
            if((title == undefined || !title.replace(/\s/g, '').length) &&
               (description == undefined || !description.replace(/\s/g, '').length) &&
               (pages == undefined || !pages.replace(/\s/g, '').length) &&
               (language == undefined || !language.replace(/\s/g, '').length) &&
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { document.getElementById("edit-book-title").style.display = "block";
               document.getElementById("edit-book-description").style.display = "block";
               document.getElementById("edit-book-pages").style.display = "block";
               document.getElementById("edit-book-language").style.display = "block";
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                    document.getElementById("edit-book-description").style.display = "none";
                    document.getElementById("edit-book-pages").style.display = "none";
                    document.getElementById("edit-book-language").style.display = "none";
                    document.getElementById("edit-book-cost").style.display = "none";
                }

                if((title == undefined || !title.replace(/\s/g, '').length) &&
               (description == undefined || !description.replace(/\s/g, '').length) &&
               (pages == undefined || !pages.replace(/\s/g, '').length) &&
               (language == undefined || !language.replace(/\s/g, '').length) 
             ) 
             { document.getElementById("edit-book-title").style.display = "block";
               document.getElementById("edit-book-description").style.display = "block";
               document.getElementById("edit-book-pages").style.display = "block";
               document.getElementById("edit-book-language").style.display = "block";
               
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                    document.getElementById("edit-book-description").style.display = "none";
                    document.getElementById("edit-book-pages").style.display = "none";
                    document.getElementById("edit-book-language").style.display = "none";
                    
                }

                if((title == undefined || !title.replace(/\s/g, '').length) &&
                (description == undefined || !description.replace(/\s/g, '').length) &&
                (pages == undefined || !pages.replace(/\s/g, '').length) &&
                (cost == undefined || !cost.replace(/\s/g, '').length)
              ) 
              { document.getElementById("edit-book-title").style.display = "block";
                document.getElementById("edit-book-description").style.display = "block";
                document.getElementById("edit-book-pages").style.display = "block";
                document.getElementById("edit-book-cost").style.display = "block";
               
               return; }
             
              else { document.getElementById("edit-book-title").style.display = "none"; 
                     document.getElementById("edit-book-description").style.display = "none";
                     document.getElementById("edit-book-pages").style.display = "none";
                     document.getElementById("edit-book-cost").style.display = "none";
                }

             if((title == undefined || !title.replace(/\s/g, '').length) &&
                (description == undefined || !description.replace(/\s/g, '').length) &&
                (language == undefined || !language.replace(/\s/g, '').length) &&
                (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { document.getElementById("edit-book-title").style.display = "block";
               document.getElementById("edit-book-description").style.display = "block";
               document.getElementById("edit-book-language").style.display = "block";
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                    document.getElementById("edit-book-description").style.display = "none";
                    document.getElementById("edit-book-language").style.display = "none";
                    document.getElementById("edit-book-cost").style.display = "none";
                }
                if((title == undefined || !title.replace(/\s/g, '').length) &&
                (pages == undefined || !pages.replace(/\s/g, '').length) &&
                (language == undefined || !language.replace(/\s/g, '').length) &&
                (cost == undefined || !cost.replace(/\s/g, '').length)
              ) 
              { document.getElementById("edit-book-title").style.display = "block";
                document.getElementById("edit-book-pages").style.display = "block";
                document.getElementById("edit-book-language").style.display = "block";
                document.getElementById("edit-book-cost").style.display = "block";
               
               return; }
             
              else { document.getElementById("edit-book-title").style.display = "none"; 
                     document.getElementById("edit-book-pages").style.display = "none";
                     document.getElementById("edit-book-language").style.display = "none";
                     document.getElementById("edit-book-cost").style.display = "none";
                 }

                 if((description == undefined || !description.replace(/\s/g, '').length) &&
                 (pages == undefined || !pages.replace(/\s/g, '').length) &&
                 (language == undefined || !language.replace(/\s/g, '').length) &&
                 (cost == undefined || !cost.replace(/\s/g, '').length)
               ) 
               { document.getElementById("edit-book-description").style.display = "block";
                 document.getElementById("edit-book-pages").style.display = "block";
                 document.getElementById("edit-book-language").style.display = "block";
                 document.getElementById("edit-book-cost").style.display = "block";
                
                return; }
              
               else { document.getElementById("edit-book-description").style.display = "none";
                      document.getElementById("edit-book-pages").style.display = "none";
                      document.getElementById("edit-book-language").style.display = "none";
                      document.getElementById("edit-book-cost").style.display = "none";
                  }

                  if((title == undefined || !title.replace(/\s/g, '').length) &&
               (description == undefined || !description.replace(/\s/g, '').length) &&
               (pages == undefined || !pages.replace(/\s/g, '').length)
               ) 
             { document.getElementById("edit-book-title").style.display = "block";
               document.getElementById("edit-book-description").style.display = "block";
               document.getElementById("edit-book-pages").style.display = "block";
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                    document.getElementById("edit-book-description").style.display = "none";
                    document.getElementById("edit-book-pages").style.display = "none";
                }
                 
                if((title == undefined || !title.replace(/\s/g, '').length) &&
               (description == undefined || !description.replace(/\s/g, '').length) &&
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { document.getElementById("edit-book-title").style.display = "block";
               document.getElementById("edit-book-description").style.display = "block";
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                    document.getElementById("edit-book-description").style.display = "none";
                    document.getElementById("edit-book-cost").style.display = "none";
                }
                if((title == undefined || !title.replace(/\s/g, '').length) &&
               (language == undefined || !language.replace(/\s/g, '').length) &&
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { document.getElementById("edit-book-title").style.display = "block";
               document.getElementById("edit-book-language").style.display = "block";
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                    document.getElementById("edit-book-language").style.display = "none";
                    document.getElementById("edit-book-cost").style.display = "none";
                }

                if(
               (pages == undefined || !pages.replace(/\s/g, '').length) &&
               (language == undefined || !language.replace(/\s/g, '').length) &&
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { 
               document.getElementById("edit-book-pages").style.display = "block";
               document.getElementById("edit-book-language").style.display = "block";
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { 
                    document.getElementById("edit-book-pages").style.display = "none";
                    document.getElementById("edit-book-language").style.display = "none";
                    document.getElementById("edit-book-cost").style.display = "none";
                }
                if(
               (description == undefined || !description.replace(/\s/g, '').length) &&
      
               (language == undefined || !language.replace(/\s/g, '').length) &&
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { 
               document.getElementById("edit-book-description").style.display = "block";
               
               document.getElementById("edit-book-language").style.display = "block";
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { 
                    document.getElementById("edit-book-description").style.display = "none";
                    
                    document.getElementById("edit-book-language").style.display = "none";
                    document.getElementById("edit-book-cost").style.display = "none";
                }
                if(
               (description == undefined || !description.replace(/\s/g, '').length) &&
               (pages == undefined || !pages.replace(/\s/g, '').length) &&
               
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { 
               document.getElementById("edit-book-description").style.display = "block";
               document.getElementById("edit-book-pages").style.display = "block";
               
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { 
                    document.getElementById("edit-book-description").style.display = "none";
                    document.getElementById("edit-book-pages").style.display = "none";
                    
                    document.getElementById("edit-book-cost").style.display = "none";
                }
                if(
               (description == undefined || !description.replace(/\s/g, '').length) &&
               (pages == undefined || !pages.replace(/\s/g, '').length) &&
               (language == undefined || !language.replace(/\s/g, '').length) 
               
             ) 
             { 
               document.getElementById("edit-book-description").style.display = "block";
               document.getElementById("edit-book-pages").style.display = "block";
               document.getElementById("edit-book-language").style.display = "block";
               
              
              return; }
            
             else {  
                    document.getElementById("edit-book-description").style.display = "none";
                    document.getElementById("edit-book-pages").style.display = "none";
                    document.getElementById("edit-book-language").style.display = "none";
                    
                }
                if((title == undefined || !title.replace(/\s/g, '').length) &&
               
               (pages == undefined || !pages.replace(/\s/g, '').length) &&
               
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { document.getElementById("edit-book-title").style.display = "block";
               
               document.getElementById("edit-book-pages").style.display = "block";
               
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                    
                    document.getElementById("edit-book-pages").style.display = "none";
                    
                    document.getElementById("edit-book-cost").style.display = "none";
                }

                if((title == undefined || !title.replace(/\s/g, '').length) &&
               
               (pages == undefined || !pages.replace(/\s/g, '').length) &&
               (language == undefined || !language.replace(/\s/g, '').length)
              )
              
             { document.getElementById("edit-book-title").style.display = "block";
               
               document.getElementById("edit-book-pages").style.display = "block";
               document.getElementById("edit-book-language").style.display = "block";
               
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                    
                    document.getElementById("edit-book-pages").style.display = "none";
                    document.getElementById("edit-book-language").style.display = "none";
                    
                }
                if(
               (language == undefined || !language.replace(/\s/g, '').length) &&
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { 
               document.getElementById("edit-book-language").style.display = "block";
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { 
                    document.getElementById("edit-book-language").style.display = "none";
                    document.getElementById("edit-book-cost").style.display = "none";
                }
                if((title == undefined || !title.replace(/\s/g, '').length) &&
              
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { document.getElementById("edit-book-title").style.display = "block";
               
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                    
                    document.getElementById("edit-book-cost").style.display = "none";
                }
                if((title == undefined || !title.replace(/\s/g, '').length) &&
               (description == undefined || !description.replace(/\s/g, '').length) 
             ) 
             { document.getElementById("edit-book-title").style.display = "block";
               document.getElementById("edit-book-description").style.display = "block";

              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                    document.getElementById("edit-book-description").style.display = "none";

                }
                if((title == undefined || !title.replace(/\s/g, '').length) &&
               
               (pages == undefined || !pages.replace(/\s/g, '').length) 


             ) 
             { document.getElementById("edit-book-title").style.display = "block";
               
               document.getElementById("edit-book-pages").style.display = "block";
              
             
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
                   
                    document.getElementById("edit-book-pages").style.display = "none";
                 
              
                }

                if((title == undefined || !title.replace(/\s/g, '').length) &&

               (language == undefined || !language.replace(/\s/g, '').length) 

             ) 
             { document.getElementById("edit-book-title").style.display = "block";
         

               document.getElementById("edit-book-language").style.display = "block";
   
              
              return; }
            
             else { document.getElementById("edit-book-title").style.display = "none"; 
   
                    document.getElementById("edit-book-language").style.display = "none";
               
                }
                if(
               (description == undefined || !description.replace(/\s/g, '').length) &&
               
               (language == undefined || !language.replace(/\s/g, '').length) 
               
             ) 
             { 
               document.getElementById("edit-book-description").style.display = "block";
               
               document.getElementById("edit-book-language").style.display = "block";
               
              
              return; }
            
             else { 
                    document.getElementById("edit-book-description").style.display = "none";
                    
                    document.getElementById("edit-book-language").style.display = "none";
                    
                }
                if(
               (pages == undefined || !pages.replace(/\s/g, '').length) &&
               (language == undefined || !language.replace(/\s/g, '').length)
             ) 
             { 
               document.getElementById("edit-book-pages").style.display = "block";
               document.getElementById("edit-book-language").style.display = "block";
               
              
              return; }
            
             else { 
                    document.getElementById("edit-book-pages").style.display = "none";
                    document.getElementById("edit-book-language").style.display = "none";
                 
                }
                if(
               (description == undefined || !description.replace(/\s/g, '').length) &&
               (pages == undefined || !pages.replace(/\s/g, '').length) 
               
             ) 
             { 
               document.getElementById("edit-book-description").style.display = "block";
               document.getElementById("edit-book-pages").style.display = "block";
               
              return; }
            
             else { 
                    document.getElementById("edit-book-description").style.display = "none";
                    document.getElementById("edit-book-pages").style.display = "none";
                    
                }
                if(
               (description == undefined || !description.replace(/\s/g, '').length) &&
               
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { 
               document.getElementById("edit-book-description").style.display = "block";
              
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { 
                    document.getElementById("edit-book-description").style.display = "none";
                    
                    document.getElementById("edit-book-cost").style.display = "none";
                }
                if(
               (pages == undefined || !pages.replace(/\s/g, '').length) &&
               
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { 
               document.getElementById("edit-book-pages").style.display = "block";
               
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { 
                    document.getElementById("edit-book-pages").style.display = "none";
                    
                    document.getElementById("edit-book-cost").style.display = "none";
                }
                if(title == undefined || !title.replace(/\s/g, '').length) { document.getElementById("edit-book-title").style.display = "block"; return; }
                else { document.getElementById("edit-book-title").style.display = "none"; }

                if(
               (description == undefined || !description.replace(/\s/g, '').length) 
             ) 
             { 
               document.getElementById("edit-book-description").style.display = "block";
               
              
              return; }
            
             else { 
                    document.getElementById("edit-book-description").style.display = "none";
                    
                }
            
                if(
               (pages == undefined || !pages.replace(/\s/g, '').length) 
             ) 
             { 
               document.getElementById("edit-book-pages").style.display = "block";
               
              return; }
            
             else { 
                    document.getElementById("edit-book-pages").style.display = "none";
                    
                }

                if(
               (language == undefined || !language.replace(/\s/g, '').length)
             ) 
             { 
               document.getElementById("edit-book-language").style.display = "block";
               
              
              return; }
            
             else { 
                    document.getElementById("edit-book-language").style.display = "none";
                    
                }
                if(
               (cost == undefined || !cost.replace(/\s/g, '').length)
             ) 
             { 
               document.getElementById("edit-book-cost").style.display = "block";
              
              return; }
            
             else { 
                    document.getElementById("edit-book-cost").style.display = "none";
                }
            const response = await fetch(`http://localhost:5000/books/${book_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response.data)
            alert("A változtatás el lett mentve az adatbázisba!");
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
        <>
            <form onSubmit={onSubmitForm}>
                <div>
                    <span id="edit-book-title" className="error-message">A cím mező nem lehet üres.</span>
                    <label>Cím</label>
                    <input type="text" name="title" className="form-control my-3" placeholder={title} value={title} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <span id="edit-book-description" className="error-message">A leírás mező nem lehet üres.</span>
                    <label>Leírás</label>
                    <textarea name="description" className="form-control my-3" placeholder={description} value={description} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <span id="edit-book-pages" className="error-message">Az oldalszám mező nem lehet üres.</span>
                    <label>Oldalszám</label>
                    <input type="number" name="pages" className="form-control my-3" placeholder={pages} value={pages} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <span id="edit-book-language" className="error-message">A nyelv mező nem lehet üres.</span>
                    <label>Nyelv</label>
                    <input type="text" name="language" className="form-control my-3" placeholder={language} value={language} onChange={e => onChange(e)}/>
                </div>
                <label>Kategória</label>
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
                    <span id="edit-book-cost" className="error-message">Az ár mező nem lehet üres.</span>
                    <label>Ár</label>
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