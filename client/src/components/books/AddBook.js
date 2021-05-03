import React from 'react';
import Book from './Book';


function AddBook(){
    return(
        <>
            <form action="/books" method="POST" encType="multipart/form-data">
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={book.title}/>
                </div>  
                <div>
                    <label>Author</label>
                    <input type="text" name="author" value={book.author}/>
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" >{book.description}</textarea>
                </div>
                <div>
                    <label>Page Count</label>
                    <input type="number" name="page_count" min="1" value={book.pages}/>
                </div>
                <div>
                    <label>Cover</label>
                    <input type="file" name="cover"/>
                </div>
            <a href="/books">Cancel</a>
            <button type="submit">Add</button>
            </form>
        </>
    )

}

export default AddBook;