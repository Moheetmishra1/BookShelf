
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BookShelf from './assets/component/BookShelf/BookShelf'
import Navbar from './assets/component/BookShelf/Navbar'
import MyShelf from './assets/component/BookShelf/MyShelf'

function App() {
 

  return (
    <div className='app'>

      <BrowserRouter>
      <Navbar />    
      <Routes>
        <Route index element={ <BookShelf />} />
        <Route path="/mybookshelf" element={<MyShelf />} />
      </Routes>
      </BrowserRouter>

     

    </div>
  )
}

export default App
