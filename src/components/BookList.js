import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

function BookList () {
  const {isLightTheme, light, dark } = useContext(ThemeContext);
  const{ books } = useContext(BookContext);
  const themeContext = useContext(ThemeContext);
  // const { isLightTheme, light, dark } = themeContext;
  const theme = isLightTheme ? light : dark;
  console.log(themeContext)

  return (
    <div className='book-list' style={{ color:theme.syntax, background:theme.bg}}>

        <ul > 
          {
            books.map(book => {
              return(
                <li key={book.id}style={{ background:theme.ui}} >{book.title}</li>

              )
            })
          }
            
            <li style={{ background:theme.ui}} >THink like a monk</li>
            <li style={{ background:theme.ui}} >THink like a monk</li>
        </ul>
    </div>
  )
}

export default BookList;