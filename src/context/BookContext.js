import React, { createContext, useState } from 'react'

export const BookContext = createContext();



const BookContextProvider = (props) => {

    const[books, setBooks] = useState([
        {title: 'EMotional INtelligence', id: 1},
        {title: '48 laws of power', id: 1},
        {title: 'Subcosious mind', id: 1},
        {title: 'Courage to be disliked', id: 1},
    ])
  return (
    <BookContextProvider value={{books}}>
        {props.children}
    </BookContextProvider>
  )
}

export default BookContextProvider;