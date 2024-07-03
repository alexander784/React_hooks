import './App.css';
import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import NewBookForm from './components/NewBookForm';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <NewBookForm />
        

      </BookContextProvider>

    </div>
   
  );
}

export default App;
