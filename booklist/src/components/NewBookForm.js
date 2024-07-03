 import { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'
import { type } from '@testing-library/user-event/dist/type';

const NewBookForm = () => {
 const { dispatch } = useContext(BookContext);

 const[title, setTitle] = useState('');
 const[author, setAuthor] = useState('');
 const handleSubmit = (e) => {
   e.preventDefault();
   // USe dispatch to add a book
   dispatch({type: "ADD_BOOK", book : {
      title, author
   }});
   setTitle('');
   setAuthor('');

   // console.log(title, author);
 }
 
 return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='book title' value={title}
         onChange={(e) => setTitle(e.target.value)} required
         />
         <input type='text' placeholder='book author' value={author}
         onChange={(e) => setAuthor(e.target.value)} required

         />
         <input type='submit' value="add book"/>
    </form>

 ); 
}

export default NewBookForm;