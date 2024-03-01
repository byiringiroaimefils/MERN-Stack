import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import DeleteBook from "./Components/DeleteBook"
import CreatBook from "./Components/CreatBook"
import EditBook from "./Components/EditBook"
import ShowDetls from "./Components/ShowDetls"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='book/CreatBook' element={ <CreatBook />} />
          <Route path='book/delete/:id' element={<DeleteBook/> } />
          <Route path='book/Detail/:id' element={<ShowDetls/> } />
          <Route path='book/edit/:id' element={ < EditBook/>} />

        </Routes>

      </BrowserRouter>
    </div>

  )
}

export default App
