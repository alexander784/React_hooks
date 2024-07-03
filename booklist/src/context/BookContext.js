import React, { createContext, useReducer, useState, useEffect} from 'react'
import {v1 as uuid} from "uuid";
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();


const BookContextProvider = (props) => {

const[books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
});

useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
}, [books])

    
    return (
        <BookContext.Provider value={{books,dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
  
}

export default BookContextProvider;